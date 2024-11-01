import { useEffect, useRef } from "react";

export const UseOutsideClickCustomHook = () => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    console.log("useOutsideClick");
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div ref={ref} className="p-10 text-white bg-blue-700">
        Click outside to show toast
      </div>
    </div>
  );
};

function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      // @ts-ignore
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [callback, ref]);
}
