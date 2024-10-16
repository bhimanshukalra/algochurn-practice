import { useEffect } from "react";
import { useKeyPress } from "./hooks/useKeyPress";
import toast, { Toaster } from "react-hot-toast";

const UseKeyPressHook = () => {
  const isShiftKeyPressed = useKeyPress("Shift");
  const isEnterKeyPressed = useKeyPress("Enter");

  useEffect(() => {
    if (isShiftKeyPressed && isEnterKeyPressed) {
      toast("target key pressed");
    }
  }, [isShiftKeyPressed, isEnterKeyPressed]);

  return (
    <div>
      <Toaster />
      UseKeyPressHook
    </div>
  );
};

export default UseKeyPressHook;
