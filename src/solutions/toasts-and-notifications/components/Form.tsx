import { useState } from "react";
import { icons, positions } from "../constants";
import { Toast } from "..";
import { getId } from "../utils";

type FormProps = {
  onClickShowToast: (toastItem: Toast) => void;
};

const Form = ({ onClickShowToast }: FormProps) => {
  const [toastTitle, setToastTitle] = useState("Title");
  const [toastPosition, setToastPosition] = useState(positions[0]);
  const [toastIcon, setToastIcon] = useState(icons[0]);
  return (
    <div className="flex flex-col p-3 border border-black">
      <input
        type="text"
        onChange={onChangeTitle}
        value={toastTitle}
        className="px-2 mb-3 border border-black rounded-md"
        placeholder="Toast title"
      />
      <select
        onChange={updateToastPosition}
        className="px-2 py-1 mb-3 border border-black rounded-md"
      >
        {positions.map(({ id, name, style, value }) => (
          <option key={id} value={value} style={{ ...style }}>
            {name}
          </option>
        ))}
      </select>
      <select
        className="px-2 py-1 mb-3 border border-black rounded-md"
        onChange={updateToastIcon}
      >
        {icons.map(({ id, value }) => (
          <option key={id}>{value}</option>
        ))}
      </select>
      <input
        type="button"
        onClick={onClickPrimaryButton}
        value={"Show Toast"}
        className="px-3 py-1 mt-2 border border-black rounded-2xl"
      />
    </div>
  );

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setToastTitle(event.target.value);
  }

  function updateToastPosition(event: React.ChangeEvent<HTMLSelectElement>) {
    const updatedPosition = positions.filter(
      (item) => item.value === event.target.value
    );
    setToastPosition(updatedPosition[0]);
  }

  function updateToastIcon(event: React.ChangeEvent<HTMLSelectElement>) {
    const updatedIcons = icons.filter(
      (item) => item.value === event.target.value
    );
    setToastIcon(updatedIcons[0]);
  }

  function onClickPrimaryButton() {
    const toastItem: Toast = {
      id: getId(),
      icon: toastIcon.value,
      title: toastTitle,
      position: toastPosition,
    };
    onClickShowToast(toastItem);
  }
};

export default Form;
