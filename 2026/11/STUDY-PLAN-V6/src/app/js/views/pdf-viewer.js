/* =========================================================================
   IN-APP JAVASCRIPT PDF VIEWER (PDF.js with Lazy Rendering & Auto-Scroll)
   ========================================================================= */

import { RES_RAW } from "../data/resources.js";
import { UNIT_PAGES, getUnitPdfInfo } from "../data/unit-pages.js";
import { SUBJECTS } from "../data/subjects.js";
import { cleanUnit } from "../engine/syllabus.js";
import { toast, esc } from "../utils/dom.js";

// Viewer State
export const PV_STATE = {
  isOpen: false,
  isZenMode: false,
  pdfDoc: null,
  currentUrl: null,
  currentPage: 1,
  totalPages: 0,
  targetPage: 1,
  title: "",
  sectionTitle: "",
  scaleMode: "fit-width", // 'fit-width' or numeric scale like 1.0, 1.25, 1.5
  currentScale: 1.0,
  pageViewports: {},      // cache of unscaled page viewports { pageNum: viewport }
  renderedPages: new Set(), // set of page numbers currently rendered on canvas
  renderTasks: {},        // { pageNum: renderTask }
  observer: null,
  scrollTimeout: null
};

// PDF.js CDN Worker Configuration
export function ensurePdfJs() {
  if (window.pdfjsLib) {
    if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }
    return Promise.resolve(window.pdfjsLib);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(window.pdfjsLib);
      } else {
        reject(new Error("Failed to load PDF.js library"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load PDF.js from CDN"));
    document.head.appendChild(script);
  });
}

// Build or Retrieve Viewer Overlay DOM
export function getOrCreateViewerEl() {
  let el = document.getElementById("pdf-viewer-overlay");
  if (el) return el;

  el = document.createElement("div");
  el.id = "pdf-viewer-overlay";
  el.className = "pdf-viewer-overlay hidden";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-label", "PDF Textbook Reader");

  el.innerHTML = `
    <!-- Top Navigation Header -->
    <header class="pdf-viewer-header">
      <div class="pdf-hdr-left">
        <button id="pv-btn-close-left" class="pdf-btn-icon" title="Close reader (Esc)" aria-label="Close reader">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div class="pdf-title-group">
          <div id="pv-doc-title" class="pdf-doc-title">Document</div>
          <div id="pv-section-pill" class="pdf-section-pill">
            <span class="dot"></span>
            <span id="pv-section-text">Section</span>
          </div>
        </div>
      </div>

      <!-- Desktop Toolbar: Page Jump & Zoom & Fullscreen -->
      <div class="pdf-hdr-center">
        <div class="pdf-page-controls">
          <button id="pv-btn-prev" class="pdf-btn-step" title="Previous page (Left arrow)" aria-label="Previous page">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div class="pdf-page-input-wrap">
            <input type="number" id="pv-page-input" class="pdf-page-input" min="1" max="1" value="1" aria-label="Page number" />
            <span id="pv-page-total" class="pdf-page-total">/ 1</span>
          </div>
          <button id="pv-btn-next" class="pdf-btn-step" title="Next page (Right arrow)" aria-label="Next page">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        <div class="pdf-zoom-controls">
          <button id="pv-btn-zoom-out" class="pdf-btn-step" title="Zoom out (-)" aria-label="Zoom out">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/></svg>
          </button>
          <span id="pv-zoom-level" class="pdf-zoom-level" title="Current zoom (click to reset 100%)">100%</span>
          <button id="pv-btn-zoom-in" class="pdf-btn-step" title="Zoom in (+)" aria-label="Zoom in">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </button>
          <button id="pv-btn-fit-width" class="pdf-btn-fit-width" title="Fit width to screen">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16M8 4L4 8l4 4M16 12l4 4-4 4"/></svg>
            <span>Fit Width</span>
          </button>
          <button id="pv-btn-fullscreen" class="pdf-btn-step" title="Fullscreen (Zen mode - only pages)" aria-label="Fullscreen">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          </button>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="pdf-hdr-right">
        <button id="pv-btn-close-right" class="pdf-btn-icon" title="Close (Esc)" aria-label="Close">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </header>

    <!-- Scrollable Document Viewport -->
    <main id="pdf-viewer-body" class="pdf-viewer-body">
      <!-- Loading State -->
      <div id="pv-loading" class="pdf-state-card">
        <div class="pdf-spinner"></div>
        <div class="pdf-state-msg" id="pv-loading-msg">Fetching PDF from GitHub...</div>
        <div class="pdf-state-sub">Loading document and preparing section view</div>
      </div>

      <!-- Error State -->
      <div id="pv-error" class="pdf-state-card hidden" style="display: none;">
        <div class="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <div class="pdf-state-msg">Could not load PDF</div>
        <div id="pv-error-sub" class="pdf-state-sub">Check internet connection or open directly on GitHub.</div>
        <div class="flex items-center gap-3 mt-2">
          <button id="pv-btn-retry" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white transition">Retry</button>
          <a id="pv-btn-error-raw" href="#" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-semibold text-xs text-slate-200 transition">Open on GitHub</a>
        </div>
      </div>

      <!-- Rendered Page Slots Container -->
      <div id="pv-pages-container" class="pdf-pages-container"></div>
    </main>

    <!-- Floating Exit Button for Zen Mode -->
    <button id="pv-zen-exit" class="pdf-zen-exit hidden" title="Exit Fullscreen (Esc)">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      <span>Exit Fullscreen</span>
    </button>

    <!-- Mobile Floating Bottom Toolbar -->
    <div class="pdf-mobile-bar">
      <button id="pv-m-prev" class="pdf-btn-step" title="Previous page" aria-label="Previous page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div class="pdf-page-input-wrap">
        <input type="number" id="pv-m-input" class="pdf-page-input" min="1" max="1" value="1" aria-label="Current page" />
        <span id="pv-m-total" class="pdf-page-total">/ 1</span>
      </div>
      <button id="pv-m-next" class="pdf-btn-step" title="Next page" aria-label="Next page">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
      <div class="w-[1px] h-5 bg-white/20 my-auto"></div>
      <button id="pv-m-fit" class="pdf-zoom-badge" title="Fit width">Fit</button>
      <button id="pv-m-zoom-in" class="pdf-btn-step" title="Zoom in" aria-label="Zoom in">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
      </button>
      <button id="pv-m-fullscreen" class="pdf-btn-step" title="Fullscreen (Zen mode)" aria-label="Fullscreen">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
      </button>
    </div>
  `;

  document.body.appendChild(el);
  bindViewerEvents(el);
  return el;
}

// Bind Global Viewer UI Listeners
function bindViewerEvents(el) {
  const close = () => closePdfViewer();
  el.querySelector("#pv-btn-close-left").onclick = close;
  el.querySelector("#pv-btn-close-right").onclick = close;

  // Step buttons
  el.querySelector("#pv-btn-prev").onclick = () => stepPage(-1);
  el.querySelector("#pv-btn-next").onclick = () => stepPage(1);
  el.querySelector("#pv-m-prev").onclick = () => stepPage(-1);
  el.querySelector("#pv-m-next").onclick = () => stepPage(1);

  // Page input changes
  const onPageSubmit = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= PV_STATE.totalPages) {
      scrollToPage(val);
    } else {
      e.target.value = PV_STATE.currentPage;
    }
  };
  el.querySelector("#pv-page-input").addEventListener("change", onPageSubmit);
  el.querySelector("#pv-page-input").addEventListener("keydown", (e) => { if (e.key === "Enter") onPageSubmit(e); });
  el.querySelector("#pv-m-input").addEventListener("change", onPageSubmit);
  el.querySelector("#pv-m-input").addEventListener("keydown", (e) => { if (e.key === "Enter") onPageSubmit(e); });

  // Zoom controls
  el.querySelector("#pv-btn-zoom-in").onclick = () => adjustZoom(0.2);
  el.querySelector("#pv-btn-zoom-out").onclick = () => adjustZoom(-0.2);
  el.querySelector("#pv-m-zoom-in").onclick = () => adjustZoom(0.2);

  const toggleFitWidth = () => {
    PV_STATE.scaleMode = "fit-width";
    recalculateScaleAndLayout();
  };
  el.querySelector("#pv-btn-fit-width").onclick = toggleFitWidth;
  el.querySelector("#pv-m-fit").onclick = toggleFitWidth;

  const zoomLevelEl = el.querySelector("#pv-zoom-level");
  if (zoomLevelEl) {
    zoomLevelEl.onclick = () => {
      PV_STATE.scaleMode = 1.0;
      recalculateScaleAndLayout();
    };
  }

  // Mobile multi-directional gestures and pinch zoom
  setupMobileGestures(el);

  // Fullscreen / Zen Mode controls
  const toggleZen = () => toggleZenMode();
  const fsBtn = el.querySelector("#pv-btn-fullscreen");
  const mFsBtn = el.querySelector("#pv-m-fullscreen");
  const zenExitBtn = el.querySelector("#pv-zen-exit");
  if (fsBtn) fsBtn.onclick = toggleZen;
  if (mFsBtn) mFsBtn.onclick = toggleZen;
  if (zenExitBtn) zenExitBtn.onclick = () => toggleZenMode(false);

  // Listen to native fullscreen changes
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && PV_STATE.isZenMode) {
      toggleZenMode(false);
    }
  });

  // Retry
  el.querySelector("#pv-btn-retry").onclick = () => {
    if (PV_STATE.currentUrl) {
      loadDocument(PV_STATE.currentUrl, PV_STATE.targetPage);
    }
  };

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!PV_STATE.isOpen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      if (PV_STATE.isZenMode) {
        toggleZenMode(false);
      } else {
        closePdfViewer();
      }
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      if (document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        stepPage(-1);
      }
    } else if (e.key === "ArrowRight" || e.key === "PageDown") {
      if (document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        stepPage(1);
      }
    } else if (e.key === "Home") {
      if (document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        scrollToPage(1);
      }
    } else if (e.key === "End") {
      if (document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        scrollToPage(PV_STATE.totalPages);
      }
    }
  });

  // Scroll tracking to update current page indicator
  const bodyEl = el.querySelector("#pdf-viewer-body");
  bodyEl.addEventListener("scroll", () => {
    if (PV_STATE.scrollTimeout) clearTimeout(PV_STATE.scrollTimeout);
    PV_STATE.scrollTimeout = setTimeout(updateActivePageOnScroll, 120);
  }, { passive: true });

  // Window resize debouncer
  window.addEventListener("resize", () => {
    if (!PV_STATE.isOpen || !PV_STATE.pdfDoc) return;
    if (PV_STATE.scaleMode === "fit-width") {
      recalculateScaleAndLayout();
    }
  });
}

// Mobile multi-directional swipe & 2-finger pinch zoom
function setupMobileGestures(el) {
  const bodyEl = el.querySelector("#pdf-viewer-body");
  const container = el.querySelector("#pv-pages-container");
  if (!bodyEl || !container) return;

  let initialPinchDist = 0;
  let initialScale = 1.0;
  let isPinching = false;
  let lastTapTime = 0;

  // Touch start: 2-finger pinch or double tap
  bodyEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      isPinching = true;
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      initialPinchDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      initialScale = PV_STATE.currentScale;
      container.style.transition = "none";
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapTime < 280) {
        // Double tap: toggle between fit-width and 1.6x zoom
        e.preventDefault();
        const sampleVp = PV_STATE.pageViewports[1];
        const fitScale = sampleVp ? computeScale(sampleVp) : 1.0;
        if (PV_STATE.scaleMode === "fit-width" || Math.abs(PV_STATE.currentScale - fitScale) < 0.08) {
          PV_STATE.scaleMode = Math.round(fitScale * 1.6 * 10) / 10;
        } else {
          PV_STATE.scaleMode = "fit-width";
        }
        recalculateScaleAndLayout();
      }
      lastTapTime = now;
    }
  }, { passive: false });

  // Touch move: live smooth pinch zoom with 60fps GPU acceleration
  bodyEl.addEventListener("touchmove", (e) => {
    if (isPinching && e.touches.length === 2) {
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      if (initialPinchDist > 8) {
        const factor = currentDist / initialPinchDist;
        container.style.transformOrigin = "50% 0%";
        container.style.transform = `scale(${factor})`;
      }
    }
  }, { passive: false });

  // Touch end: commit new scale and re-render sharp canvas
  const onPinchEnd = () => {
    if (isPinching) {
      isPinching = false;
      const matrix = container.style.transform;
      container.style.transform = "";
      container.style.transition = "";

      const match = matrix.match(/scale\(([^)]+)\)/);
      if (match) {
        const factor = parseFloat(match[1]);
        if (!isNaN(factor) && factor > 0 && Math.abs(factor - 1.0) > 0.05) {
          const newScale = Math.max(0.4, Math.min(3.8, Math.round(initialScale * factor * 100) / 100));
          PV_STATE.scaleMode = newScale;
          recalculateScaleAndLayout();
        }
      }
    }
  };

  bodyEl.addEventListener("touchend", onPinchEnd, { passive: true });
  bodyEl.addEventListener("touchcancel", onPinchEnd, { passive: true });
}

/**
 * Toggle Fullscreen / Zen Mode (only pages visible)
 * @param {boolean} [forceState]
 */
export function toggleZenMode(forceState) {
  const overlay = document.getElementById("pdf-viewer-overlay");
  const exitBtn = document.getElementById("pv-zen-exit");
  if (!overlay) return;

  const willBeZen = typeof forceState === "boolean" ? forceState : !PV_STATE.isZenMode;
  PV_STATE.isZenMode = willBeZen;

  if (willBeZen) {
    overlay.classList.add("pdf-zen-mode");
    if (exitBtn) {
      exitBtn.classList.remove("hidden");
      exitBtn.style.display = "inline-flex";
    }
    // Attempt native browser fullscreen if available and permitted
    if (!document.fullscreenElement && overlay.requestFullscreen) {
      overlay.requestFullscreen().catch(() => {});
    }
  } else {
    overlay.classList.remove("pdf-zen-mode");
    if (exitBtn) {
      exitBtn.classList.add("hidden");
      exitBtn.style.display = "none";
    }
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  // Reflow page sizing in new full-viewport dimensions
  if (PV_STATE.scaleMode === "fit-width") {
    setTimeout(recalculateScaleAndLayout, 50);
  }
}

// Helper to reliably get the active viewport width (immune to un-reflowed clientWidth)
function getViewerViewportWidth() {
  const bodyEl = document.getElementById("pdf-viewer-body");
  const bodyW = bodyEl && bodyEl.clientWidth > 200 ? bodyEl.clientWidth : 0;
  const vpW = (window.visualViewport && window.visualViewport.width) || window.innerWidth || document.documentElement.clientWidth || 360;
  return bodyW > 0 ? bodyW : vpW;
}

// Compute Optimal Scale (Matches device width and comfortable reading width)
function computeScale(sampleViewport) {
  if (!sampleViewport) return 1.0;

  if (PV_STATE.scaleMode === "fit-width") {
    const clientW = getViewerViewportWidth();
    const isMobile = clientW <= 768;

    let targetW;
    if (isMobile) {
      // Mobile: fit to 100% of device width edge-to-edge
      targetW = clientW;
    } else {
      // Desktop: fit to 80-82% of window width, capped at comfortable reading width (max 940px)
      // This prevents stretching across wide 1440p/4K monitors
      targetW = Math.min(Math.max(480, clientW * 0.8), 940);
    }

    let scale = targetW / sampleViewport.width;
    if (scale < 0.35) scale = 0.35;
    if (scale > 3.0) scale = 3.0;
    return Math.round(scale * 100) / 100;
  }

  return typeof PV_STATE.scaleMode === "number" ? PV_STATE.scaleMode : 1.0;
}

// Recalculate Page Sizes and Re-render Viewable Slots
function recalculateScaleAndLayout() {
  if (!PV_STATE.pdfDoc) return;
  const sampleVp = PV_STATE.pageViewports[1];
  if (!sampleVp) return;

  const newScale = computeScale(sampleVp);
  PV_STATE.currentScale = newScale;

  // Update zoom level indicator
  const pctText = `${Math.round(newScale * 100)}%`;
  const zoomLevelEl = document.getElementById("pv-zoom-level");
  if (zoomLevelEl) zoomLevelEl.textContent = pctText;

  // Highlight active fit-width badge if currently in fit-width mode
  const fitBtn = document.getElementById("pv-btn-fit-width");
  const mFitBtn = document.getElementById("pv-m-fit");
  if (fitBtn) {
    fitBtn.classList.toggle("active", PV_STATE.scaleMode === "fit-width");
  }
  if (mFitBtn) {
    mFitBtn.classList.toggle("active", PV_STATE.scaleMode === "fit-width");
  }

  // Resize all slots according to new dimensions
  const container = document.getElementById("pv-pages-container");
  if (!container) return;

  for (let i = 1; i <= PV_STATE.totalPages; i++) {
    const slot = document.getElementById(`pv-page-slot-${i}`);
    if (!slot) continue;
    const vp = PV_STATE.pageViewports[i] || sampleVp;
    const w = Math.round(vp.width * newScale);
    const h = Math.round(vp.height * newScale);
    slot.style.width = `${w}px`;
    slot.style.height = `${h}px`;

    // Invalidate rendered canvas to re-render at new sharp resolution
    if (PV_STATE.renderedPages.has(i)) {
      renderPageCanvas(i, slot);
    }
  }
}

// Adjust Zoom by Delta
function adjustZoom(delta) {
  let curr = PV_STATE.currentScale;
  let next = Math.max(0.4, Math.min(2.5, curr + delta));
  PV_STATE.scaleMode = Math.round(next * 10) / 10;
  recalculateScaleAndLayout();
}

// Step Page Forward/Backward
function stepPage(delta) {
  const target = Math.max(1, Math.min(PV_STATE.totalPages, PV_STATE.currentPage + delta));
  scrollToPage(target);
}

// Update Active Page Input & Indicator Based on Viewport Position
function updateActivePageOnScroll() {
  const bodyEl = document.getElementById("pdf-viewer-body");
  if (!bodyEl) return;
  const bodyRect = bodyEl.getBoundingClientRect();
  const threshold = bodyRect.top + 100;

  let bestPage = PV_STATE.currentPage;
  let minDiff = Infinity;

  for (let i = 1; i <= PV_STATE.totalPages; i++) {
    const slot = document.getElementById(`pv-page-slot-${i}`);
    if (!slot) continue;
    const r = slot.getBoundingClientRect();
    const diff = Math.abs(r.top - threshold);
    if (diff < minDiff) {
      minDiff = diff;
      bestPage = i;
    }
  }

  if (bestPage !== PV_STATE.currentPage) {
    PV_STATE.currentPage = bestPage;
    updatePageIndicators(bestPage);
  }
}

// Synchronize Current Page in All UI Controls
function updatePageIndicators(num) {
  const pInput = document.getElementById("pv-page-input");
  const mInput = document.getElementById("pv-m-input");
  if (pInput && document.activeElement !== pInput) pInput.value = num;
  if (mInput && document.activeElement !== mInput) mInput.value = num;

  const btnPrev = document.getElementById("pv-btn-prev");
  const btnNext = document.getElementById("pv-btn-next");
  const mPrev = document.getElementById("pv-m-prev");
  const mNext = document.getElementById("pv-m-next");

  const atStart = num <= 1;
  const atEnd = num >= PV_STATE.totalPages;

  if (btnPrev) btnPrev.disabled = atStart;
  if (mPrev) mPrev.disabled = atStart;
  if (btnNext) btnNext.disabled = atEnd;
  if (mNext) mNext.disabled = atEnd;
}

// Render Page Canvas on Demand (Lazy Virtualization)
async function renderPageCanvas(pageNum, slot) {
  if (!PV_STATE.pdfDoc) return;

  // Cancel any in-flight rendering for this page
  if (PV_STATE.renderTasks[pageNum]) {
    try {
      PV_STATE.renderTasks[pageNum].cancel();
    } catch (_) {}
    delete PV_STATE.renderTasks[pageNum];
  }

  try {
    const page = await PV_STATE.pdfDoc.getPage(pageNum);
    const unscaledVp = page.getViewport({ scale: 1.0 });
    PV_STATE.pageViewports[pageNum] = unscaledVp;

    const scale = PV_STATE.currentScale;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.2);
    const viewport = page.getViewport({ scale: scale * dpr });

    const w = Math.round(unscaledVp.width * scale);
    const h = Math.round(unscaledVp.height * scale);
    slot.style.width = `${w}px`;
    slot.style.height = `${h}px`;

    // Reuse or create canvas
    let canvas = slot.querySelector("canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      slot.appendChild(canvas);
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d", { alpha: false });
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    const task = page.render(renderContext);
    PV_STATE.renderTasks[pageNum] = task;

    await task.promise;
    delete PV_STATE.renderTasks[pageNum];
    PV_STATE.renderedPages.add(pageNum);

    // Hide placeholder once rendered
    const ph = slot.querySelector(".pdf-page-placeholder");
    if (ph) {
      ph.style.display = "none";
      ph.style.visibility = "hidden";
    }
    if (canvas) canvas.style.display = "block";
  } catch (err) {
    if (err?.name === "RenderingCancelledException") return;
    console.warn(`[PDF.js] Page ${pageNum} render error:`, err);
  }
}

// Clear Offscreen Page Canvas to Free Memory (Critical for iOS/Android)
function cleanupPageCanvas(pageNum, slot) {
  if (!PV_STATE.renderedPages.has(pageNum)) return;

  if (PV_STATE.renderTasks[pageNum]) {
    try {
      PV_STATE.renderTasks[pageNum].cancel();
    } catch (_) {}
    delete PV_STATE.renderTasks[pageNum];
  }

  const canvas = slot.querySelector("canvas");
  if (canvas) {
    canvas.width = 1;
    canvas.height = 1;
    canvas.remove();
  }

  const ph = slot.querySelector(".pdf-page-placeholder");
  if (ph) ph.style.display = "flex";

  PV_STATE.renderedPages.delete(pageNum);
}

// Setup Viewport IntersectionObserver for Lazy Virtualized Rendering
function setupIntersectionObserver() {
  if (PV_STATE.observer) {
    PV_STATE.observer.disconnect();
  }

  const bodyEl = document.getElementById("pdf-viewer-body");
  if (!bodyEl) return;

  PV_STATE.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const pageNum = parseInt(entry.target.getAttribute("data-page"), 10);
      if (entry.isIntersecting) {
        if (!PV_STATE.renderedPages.has(pageNum)) {
          renderPageCanvas(pageNum, entry.target);
        }
      } else {
        // Only clean up if far out of view (e.g. > 1500px away) to prevent thrashing
        const rect = entry.boundingClientRect;
        const bRect = bodyEl.getBoundingClientRect();
        if (rect.bottom < bRect.top - 1200 || rect.top > bRect.bottom + 1200) {
          cleanupPageCanvas(pageNum, entry.target);
        }
      }
    });
  }, {
    root: bodyEl,
    rootMargin: "400px 0px 400px 0px"
  });

  const slots = document.querySelectorAll(".pdf-page-slot");
  slots.forEach(slot => PV_STATE.observer.observe(slot));
}

// Scroll Smoothly to Target Page and Apply Highlight Pulse
export function scrollToPage(pageNum) {
  if (!pageNum || pageNum < 1 || pageNum > PV_STATE.totalPages) return;
  PV_STATE.currentPage = pageNum;
  updatePageIndicators(pageNum);

  const slot = document.getElementById(`pv-page-slot-${pageNum}`);
  if (!slot) return;

  // Immediate render of target page
  if (!PV_STATE.renderedPages.has(pageNum)) {
    renderPageCanvas(pageNum, slot);
  }

  // Scroll target into view
  slot.scrollIntoView({ behavior: "smooth", block: "start" });

  // Apply subtle pulse highlight
  slot.classList.remove("pdf-page-target-highlight");
  // force reflow
  void slot.offsetWidth;
  slot.classList.add("pdf-page-target-highlight");
  setTimeout(() => {
    slot.classList.remove("pdf-page-target-highlight");
  }, 2800);
}

// Load Document from Raw URL
async function loadDocument(url, targetPage = 1) {
  const loadingEl = document.getElementById("pv-loading");
  const errorEl = document.getElementById("pv-error");
  const pagesContainer = document.getElementById("pv-pages-container");

  if (loadingEl) {
    loadingEl.classList.remove("hidden");
    loadingEl.style.display = "flex";
  }
  if (errorEl) {
    errorEl.classList.add("hidden");
    errorEl.style.display = "none";
  }
  if (pagesContainer) pagesContainer.innerHTML = "";

  // Reset internal state
  PV_STATE.renderedPages.clear();
  PV_STATE.pageViewports = {};
  if (PV_STATE.observer) PV_STATE.observer.disconnect();

  try {
    const pdfjs = await ensurePdfJs();
    const loadingTask = pdfjs.getDocument({
      url: url,
      cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
      cMapPacked: true
    });

    loadingTask.onProgress = (progress) => {
      if (progress.total > 0) {
        const pct = Math.round((progress.loaded / progress.total) * 100);
        const msg = document.getElementById("pv-loading-msg");
        if (msg) msg.textContent = `Downloading from GitHub (${pct}%)...`;
      }
    };

    const doc = await loadingTask.promise;
    PV_STATE.pdfDoc = doc;
    PV_STATE.totalPages = doc.numPages;

    // Get sample viewport from page 1 for initial skeleton layout
    const firstPage = await doc.getPage(1);
    const sampleVp = firstPage.getViewport({ scale: 1.0 });
    PV_STATE.pageViewports[1] = sampleVp;

    // Compute scale (80% on desktop, 100% on mobile)
    PV_STATE.currentScale = computeScale(sampleVp);

    // Update zoom level indicator and fit-width active badge
    const zoomLevelEl = document.getElementById("pv-zoom-level");
    if (zoomLevelEl) zoomLevelEl.textContent = `${Math.round(PV_STATE.currentScale * 100)}%`;
    const fitBtn = document.getElementById("pv-btn-fit-width");
    const mFitBtn = document.getElementById("pv-m-fit");
    if (fitBtn) fitBtn.classList.toggle("active", PV_STATE.scaleMode === "fit-width");
    if (mFitBtn) mFitBtn.classList.toggle("active", PV_STATE.scaleMode === "fit-width");

    // Populate total pages in UI
    const totalText = `/ ${doc.numPages}`;
    const pTotal = document.getElementById("pv-page-total");
    const mTotal = document.getElementById("pv-m-total");
    const pInput = document.getElementById("pv-page-input");
    const mInput = document.getElementById("pv-m-input");

    if (pTotal) pTotal.textContent = totalText;
    if (mTotal) mTotal.textContent = totalText;
    if (pInput) { pInput.max = doc.numPages; pInput.value = targetPage; }
    if (mInput) { mInput.max = doc.numPages; mInput.value = targetPage; }

    // Generate lightweight page slots
    const w = Math.round(sampleVp.width * PV_STATE.currentScale);
    const h = Math.round(sampleVp.height * PV_STATE.currentScale);

    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= doc.numPages; i++) {
      const slot = document.createElement("div");
      slot.id = `pv-page-slot-${i}`;
      slot.className = "pdf-page-slot";
      slot.setAttribute("data-page", String(i));
      slot.style.width = `${w}px`;
      slot.style.height = `${h}px`;

      slot.innerHTML = `
        <div class="pdf-page-placeholder">
          <div class="pdf-spinner" style="width:24px;height:24px;border-width:2.5px;"></div>
          <span>Page ${i}</span>
        </div>
        <div class="pdf-page-number-tag">${i}</div>
      `;
      fragment.appendChild(slot);
    }
    pagesContainer.appendChild(fragment);

    // Hide loader
    if (loadingEl) {
      loadingEl.classList.add("hidden");
      loadingEl.style.display = "none";
    }

    // Initialize IntersectionObserver for lazy rendering
    setupIntersectionObserver();

    // Scroll to section page
    setTimeout(() => {
      scrollToPage(targetPage);
    }, 100);

  } catch (err) {
    console.error("[PDF Viewer Error]", err);
    if (loadingEl) {
      loadingEl.classList.add("hidden");
      loadingEl.style.display = "none";
    }
    if (errorEl) {
      errorEl.classList.remove("hidden");
      errorEl.style.display = "flex";
      const sub = document.getElementById("pv-error-sub");
      if (sub) sub.textContent = err.message || "Failed to fetch PDF from GitHub.";
    }
  }
}

/**
 * Open In-App PDF Viewer
 * @param {Object} options
 * @param {string} options.url - Full URL or relative path to PDF
 * @param {number} [options.page=1] - Target page to auto-scroll to
 * @param {string} [options.title] - Document or Subject title
 * @param {string} [options.sectionTitle] - Unit or Section title
 * @param {string} [options.rawUrl] - Fallback raw download URL
 */
export function openPdfViewer({ url, page = 1, title = "Textbook", sectionTitle = "", rawUrl = null }) {
  const overlay = getOrCreateViewerEl();

  // Normalize URL
  const fullUrl = url.startsWith("http") ? url : RES_RAW + encodeURI(url);
  const downloadUrl = rawUrl || fullUrl;

  PV_STATE.isOpen = true;
  PV_STATE.currentUrl = fullUrl;
  PV_STATE.targetPage = page;
  PV_STATE.currentPage = page;
  PV_STATE.title = title;
  PV_STATE.sectionTitle = sectionTitle;

  // Set Titles in UI
  document.getElementById("pv-doc-title").textContent = title;
  const secPill = document.getElementById("pv-section-pill");
  const secText = document.getElementById("pv-section-text");
  if (sectionTitle) {
    secText.textContent = sectionTitle;
    secPill.style.display = "flex";
  } else {
    secPill.style.display = "none";
  }

  // Set error raw link if needed
  const errRawBtn = document.getElementById("pv-btn-error-raw");
  if (errRawBtn) errRawBtn.href = downloadUrl;

  // Show Overlay
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Load document
  loadDocument(fullUrl, page);
}

/**
 * Open In-App PDF Viewer for a specific Unit
 * @param {string} subjectId - e.g. 'TH', 'DE'
 * @param {number} unitNumber - e.g. 1, 2, 3
 */
export function openUnitPdf(subjectId, unitNumber) {
  const num = Number(unitNumber);
  const s = SUBJECTS[subjectId];
  let info = getUnitPdfInfo(subjectId, num);

  if (!info) {
    // Graceful fallback to any mapped unit in this subject
    const anyUnit = s?.units?.find(u => getUnitPdfInfo(subjectId, u.u));
    if (anyUnit) {
      info = getUnitPdfInfo(subjectId, anyUnit.u);
    }
  }

  if (!info) {
    toast(`No cutout mapped for ${subjectId} Unit ${unitNumber}`);
    return;
  }

  const uObj = s?.units?.find(x => x.u === num);
  const uTitle = uObj ? cleanUnit(uObj.text) : `Unit ${num}`;
  const subjName = s?.name || subjectId;

  openPdfViewer({
    url: info.path,
    page: info.page,
    title: subjName,
    sectionTitle: `Unit ${num}: ${uTitle}`,
    rawUrl: RES_RAW + encodeURI(info.path)
  });
}

/**
 * Close In-App PDF Viewer
 */
export function closePdfViewer() {
  if (PV_STATE.isZenMode) {
    toggleZenMode(false);
  }

  const overlay = document.getElementById("pdf-viewer-overlay");
  if (overlay) overlay.classList.add("hidden");
  document.body.style.overflow = "";

  PV_STATE.isOpen = false;
  if (PV_STATE.observer) {
    PV_STATE.observer.disconnect();
    PV_STATE.observer = null;
  }

  // Cancel any ongoing render tasks
  for (const p of Object.keys(PV_STATE.renderTasks)) {
    try { PV_STATE.renderTasks[p].cancel(); } catch (_) {}
  }
  PV_STATE.renderTasks = {};
}

// Global window exposure for inline HTML event handlers
if (typeof window !== "undefined") {
  window.PV_STATE = PV_STATE;
  window.openPdfViewer = openPdfViewer;
  window.openUnitPdf = openUnitPdf;
  window.closePdfViewer = closePdfViewer;
  window.toggleZenMode = toggleZenMode;
  window.recalculateScaleAndLayout = recalculateScaleAndLayout;
}
