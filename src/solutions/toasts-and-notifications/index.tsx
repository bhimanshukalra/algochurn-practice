import { useState } from "react";
import ToastItem from "./components/ToastItem";
import Form from "./components/Form";
import { Position } from "./types";

export type Toast = {
  title: string;
  position: Position;
  icon: string;
  id: number;
};

const AUTO_CLOSE_DELAY = 3000;

const ToastAndNotification = () => {
  const [toastList, setToastList] = useState<Toast[]>([]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Form onClickShowToast={showToast} />
      {toastList.map((toastItem, index) => (
        <ToastItem
          key={index}
          item={toastItem}
          index={index}
          onCloseToast={onCloseToast}
        />
      ))}
    </div>
  );

  function showToast(toastItem: Toast) {
    setToastList([...toastList, toastItem]);

    setTimeout(() => onCloseToast(toastItem.id), AUTO_CLOSE_DELAY);
  }

  function onCloseToast(id: number) {
    setToastList((prevValue) => prevValue.filter((item) => item.id !== id));
  }
};

export default ToastAndNotification;
