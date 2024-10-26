import { IoCloseCircleOutline } from "react-icons/io5";
import { Toast } from "..";
import { Position } from "../constants";

type ToastItemProps = {
  item: Toast;
  index: number;
  onCloseToast: (id: number) => void;
};

const ToastItem = ({
  item: { icon, position, title, id },
  index,
  onCloseToast,
}: ToastItemProps) => {
  return (
    <div
      className={`flex flex-row border border-black p-3 rounded-md w-48 absolute shadow-md shadow-slate-500 bg-white ${getPositionClassName(
        position
      )}`}
      style={getPositionStyle(position)}
    >
      <div className="flex w-2/3 ">
        {title} {icon}
        {id}
      </div>
      <div className="flex w-1/3 ">
        <IoCloseCircleOutline
          className="flex flex-1 rounded-full hover:bg-gray-500"
          onClick={() => onCloseToast(id)}
          size={20}
        />
      </div>
    </div>
  );

  function getPositionClassName(position: Position) {
    switch (position.value) {
      case "top-right":
        return "right-2 top-2";
      case "top-left":
        return "left-2 top-2";
      case "bottom-left":
        return "left-2 bottom-2";
      case "bottom-right":
        return "right-2 bottom-2";
    }
  }

  function getPositionStyle(position: Position) {
    switch (position.value) {
      case "top-right":
        return { marginTop: `${index * 60}px` };
      case "top-left":
        return { marginTop: `${index * 60}px` };
      case "bottom-left":
        return { marginBottom: `${index * 60}px` };
      case "bottom-right":
        return { marginBottom: `${index * 60}px` };
    }
  }
};

export default ToastItem;
