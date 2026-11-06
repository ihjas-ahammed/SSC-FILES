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

      <!-- Desktop Toolbar: Page Jump & Zoom -->
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
          <button id="pv-btn-fit-width" class="pdf-zoom-badge" title="Fit width">Fit Width</button>
          <button id="pv-btn-zoom-in" class="pdf-btn-step" title="Zoom in (+)" aria-label="Zoom in">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="pdf-hdr-right">
        <a id="pv-btn-raw" href="#" target="_blank" rel="noopener" class="pdf-btn-open-raw" title="Open or download original PDF on GitHub">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          <span>Raw</span>
        </a>
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
      <div id="pv-error" class="pdf-state-card hidden">
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
      closePdfViewer();
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

// Compute Optimal Scale
function computeScale(sampleViewport) {
  const bodyEl = document.getElementById("pdf-viewer-body");
  if (!bodyEl || !sampleViewport) return 1.0;

  if (PV_STATE.scaleMode === "fit-width") {
    // Available viewport width with padding
    const clientW = bodyEl.clientWidth;
    const padding = clientW <= 640 ? 20 : 48;
    const availW = Math.max(280, clientW - padding);
    let scale = availW / sampleViewport.width;
    // On large desktop, cap width so text doesn't become gigantic
    if (scale > 1.4) scale = 1.4;
    if (scale < 0.4) scale = 0.4;
    return scale;
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

  // Update zoom badge text
  const pctText = `${Math.round(newScale * 100)}%`;
  const fitBtn = document.getElementById("pv-btn-fit-width");
  if (fitBtn) fitBtn.textContent = PV_STATE.scaleMode === "fit-width" ? "Fit Width" : pctText;

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
    if (ph) ph.style.display = "none";
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

  if (loadingEl) loadingEl.classList.remove("hidden");
  if (errorEl) errorEl.classList.add("hidden");
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

    // Compute scale
    PV_STATE.currentScale = computeScale(sampleVp);

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
    if (loadingEl) loadingEl.classList.add("hidden");

    // Initialize IntersectionObserver for lazy rendering
    setupIntersectionObserver();

    // Scroll to section page
    setTimeout(() => {
      scrollToPage(targetPage);
    }, 100);

  } catch (err) {
    console.error("[PDF Viewer Error]", err);
    if (loadingEl) loadingEl.classList.add("hidden");
    if (errorEl) {
      errorEl.classList.remove("hidden");
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

  // Set Raw button links
  const rawBtn = document.getElementById("pv-btn-raw");
  const errRawBtn = document.getElementById("pv-btn-error-raw");
  if (rawBtn) rawBtn.href = downloadUrl;
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
  const s = SUBJECTS[subjectId];
  const info = getUnitPdfInfo(subjectId, unitNumber);

  if (!info) {
    toast(`No cutout mapped for ${subjectId} Unit ${unitNumber}`);
    return;
  }

  const uObj = s?.units?.find(x => x.u === unitNumber);
  const uTitle = uObj ? cleanUnit(uObj.text) : `Unit ${unitNumber}`;
  const subjName = s?.name || subjectId;

  openPdfViewer({
    url: info.path,
    page: info.page,
    title: subjName,
    sectionTitle: `Unit ${unitNumber}: ${uTitle}`,
    rawUrl: RES_RAW + encodeURI(info.path)
  });
}

/**
 * Close In-App PDF Viewer
 */
export function closePdfViewer() {
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
  window.openPdfViewer = openPdfViewer;
  window.openUnitPdf = openUnitPdf;
  window.closePdfViewer = closePdfViewer;
}
