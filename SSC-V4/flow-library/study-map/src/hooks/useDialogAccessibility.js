import { useEffect } from "react";
export default function useDialogAccessibility(state) {
  const {
    closeDialog,
    modal,
    reader,
    mobileMenu,
    setReader,
    setModal,
    setMobileMenu,
    flow,
    readerTab,
  } = state;
  useEffect(() => {
    if (!modal && !reader && !mobileMenu) return;
    const previous = document.activeElement;
    const dialog =
      document.querySelector('[role="dialog"]') ||
      document.querySelector(".mobile-sidebar");
    if (dialog) {
      dialog.setAttribute("tabindex", "-1");
      dialog.focus({ preventScroll: true });
    }
    const listener = (e) => {
      if (e.key === "Escape") {
        closeDialog();
      }
      if (e.key === "Tab" && dialog) {
        const items = [
          ...dialog.querySelectorAll(
            'button:not(:disabled),a[href],input,textarea,summary,[tabindex="0"]',
          ),
        ].filter((el) => el.getClientRects().length);
        const first = items[0],
          last = items.at(-1);
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === dialog)
        ) {
          e.preventDefault();
          last?.focus();
        } else if (
          !e.shiftKey &&
          (document.activeElement === last || document.activeElement === dialog)
        ) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", listener);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", listener);
      document.body.style.overflow = "";
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [
    modal,
    reader,
    mobileMenu,
    flow.phase,
    flow.step,
    flow.readIndex,
    flow.retestIndex,
    readerTab,
  ]);
}
