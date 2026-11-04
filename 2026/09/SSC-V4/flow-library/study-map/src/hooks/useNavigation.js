import { checklist } from "../lib/routes.js";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { meta, storageKey, questions } from "../lib/course.js";
import {
  navigationSnapshot,
  navigationKey,
  restoredNavigation,
} from "../lib/navigation.js";

export default function useNavigation(state) {
  const current = useRef(state),
    root = useRef(null),
    entries = useRef([]),
    cursor = useRef(0),
    restoring = useRef(false);
  const resetPending = useRef(false);
  const [depth, setDepth] = useState(0);
  current.current = state;
  const marker = (snapshot) => ({
    ...window.history.state,
    studyMapNavigation: {
      course: storageKey,
      root: root.current,
      index: cursor.current,
      snapshot,
    },
  });
  function apply(point) {
    const s = current.current,
      next = restoredNavigation(point, s);
    restoring.current = true;
    for (const [key, value] of Object.entries(next)) {
      const setter = s[`set${key[0].toUpperCase()}${key.slice(1)}`];
      if (setter && value !== undefined) setter(value);
    }
    const q = questions.find((q) => q.id === next.questionId);
    if (q && next.section === undefined) s.setSection(q.section);
    if (q && next.modal === "study" && next.flow.phase === "checklist")
      s.setChecks(
        Object.fromEntries(
          checklist(q).map((name) => [
            name,
            s.statuses[name] === "known" ? "know" : "idk",
          ]),
        ),
      );
    if (
      next.modal === "study" &&
      ["checklist", "route", "review", "retest"].includes(next.flow.phase)
    )
      s.setPreferences((p) => ({ ...p, prerequisites: true }));
    s.setReaderResult(null);
  }
  useLayoutEffect(() => {
    const point = navigationSnapshot(state);
    if (!root.current) {
      const prior = window.history.state?.studyMapNavigation;
      root.current =
        prior?.course === storageKey
          ? prior.root
          : `${Date.now()}-${Math.random()}`;
      cursor.current = prior?.course === storageKey ? prior.index : 0;
      entries.current[cursor.current] = point;
      setDepth(cursor.current);
      window.history.replaceState(marker(point), "");
    } else if (restoring.current) {
      restoring.current = false;
      entries.current[cursor.current] = point;
      window.history.replaceState(marker(point), "");
    } else if (
      navigationKey(point) !== navigationKey(entries.current[cursor.current])
    ) {
      cursor.current += 1;
      entries.current.splice(cursor.current);
      entries.current[cursor.current] = point;
      window.history.pushState(marker(point), "");
      setDepth(cursor.current);
    } else {
      // Keep drafts current without making a browser-history write on every keypress.
      entries.current[cursor.current] = point;
    }
  }, [
    state.section,
    state.nav,
    state.modal,
    state.mobileMenu,
    state.reader,
    state.readerTab,
    state.questionId,
    state.selected,
    state.scope,
    state.filter,
    state.flow,
    state.plan,
    state.checks,
    state.mapScreen,
    state.mapPanelOpen,
    state.bookmarkIndex,
  ]);
  useEffect(() => {
    function pop(event) {
      if (resetPending.current) {
        resetPending.current = false;
        window.history.replaceState(
          marker(navigationSnapshot(current.current)),
          "",
        );
        return;
      }
      const point = event.state?.studyMapNavigation;
      if (point?.course !== storageKey || point.root !== root.current) return;
      cursor.current = point.index;
      setDepth(point.index);
      apply(entries.current[point.index] || point.snapshot);
    }
    function hardwareBack(event) {
      event.preventDefault();
      goBack();
    }
    window.addEventListener("popstate", pop);
    document.addEventListener("backbutton", hardwareBack);
    return () => {
      window.removeEventListener("popstate", pop);
      document.removeEventListener("backbutton", hardwareBack);
    };
  }, []);
  function goBack() {
    const state = current.current;
    if (cursor.current > 0) window.history.back();
    else if (state.reader || state.modal || state.mobileMenu) {
      state.setReader(null);
      state.setModal(null);
      state.setMobileMenu(false);
    } else if (state.nav !== "bank") state.setNav("bank");
    else if (meta.parentUrl) window.location.assign(meta.parentUrl);
  }
  function closeDialog() {
    const s = current.current;
    const isClosed = (point) =>
      s.mobileMenu
        ? !point.mobileMenu
        : s.reader
          ? !point.reader
          : !point.modal && !point.reader;
    for (let i = cursor.current - 1; i >= 0; i--) {
      if (entries.current[i] && isClosed(entries.current[i])) {
        window.history.go(i - cursor.current);
        return;
      }
    }
    s.setReader(null);
    s.setModal(null);
    s.setMobileMenu(false);
  }
  function resetNavigation() {
    const distance = cursor.current;
    resetPending.current = distance > 0;
    root.current = null;
    cursor.current = 0;
    entries.current = [];
    restoring.current = false;
    setDepth(0);
    window.history.replaceState(
      { ...window.history.state, studyMapNavigation: null },
      "",
    );
    if (distance) window.history.go(-distance);
  }
  return {
    resetNavigation,
    goBack,
    closeDialog,
    canGoBack:
      depth > 0 ||
      !!meta.parentUrl ||
      state.nav !== "bank" ||
      !!state.modal ||
      !!state.reader ||
      state.mobileMenu,
  };
}
