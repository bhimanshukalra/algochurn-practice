import { useEffect, useState } from "react";

export function useKeyPress(targetKey: string) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  function handleKeyUp(this: Document, event: KeyboardEvent) {
    if (targetKey === event.key) {
      setIsKeyPressed(false);
    }
  }

  function handleKeyDown(this: Document, event: KeyboardEvent) {
    if (targetKey === event.key) {
      setIsKeyPressed(true);
    }
  }

  return isKeyPressed;
}
