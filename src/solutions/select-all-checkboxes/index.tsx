import { useState } from "react";
import { list } from "./data";

type Data = {
  id: number;
  name: string;
  isChecked?: boolean;
};

export const SelectAllCheckboxes = () => {
  const [data, setData] = useState<Data[]>(list);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked = event.target.checked;
    setData([
      ...data.slice(0, index),
      { ...data[index], isChecked },
      ...data.slice(index + 1),
    ]);
  };

  const onChangeSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const updateData = data.map((item) => {
      return { ...item, isChecked };
    });
    setData(updateData);
  };

  return (
    <div className="flex flex-col m-2">
      <CheckBox
        checked={data.every((item) => item.isChecked)}
        onChange={onChangeSelectAll}
        label={"Select All"}
      />
      <form>
        {data.map((item, index) => (
          <CheckBox
            key={item.id}
            checked={item?.isChecked}
            onChange={(event) => onChange(event, index)}
            label={item.name}
          />
        ))}
      </form>
    </div>
  );
};

type CheckBoxProps = {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

function CheckBox({ checked, onChange, label }: CheckBoxProps) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          className="me-2"
          checked={checked ?? false}
        />
        {label}
      </label>
    </>
  );
}
