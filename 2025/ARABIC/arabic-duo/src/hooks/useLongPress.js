import { useCallback, useRef, useState } from 'react';

export const useLongPress = (onLongPress, onClick, { delay = 500 } = {}) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    (e, args) => {
      // Prevent context menu on mobile
      if (e.target) {
        target.current = e.target;
      }
      setLongPressTriggered(false);
      timeout.current = setTimeout(() => {
        onLongPress(e, args);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay]
  );

  const clear = useCallback(
    (e, args) => {
      if (timeout.current) clearTimeout(timeout.current);
      if (!longPressTriggered) {
        onClick(e, args);
      }
      setLongPressTriggered(false);
    },
    [onClick, longPressTriggered]
  );

  return {
    onPointerDown: (e) => start(e),
    onPointerUp: (e) => clear(e),
    onPointerLeave: (e) => clear(e, true), // Treat leaving as cancelling short click
    onContextMenu: (e) => e.preventDefault() // Prevent native long-press menus
  };
};