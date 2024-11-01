import { useState } from "react";
import { list } from "./data";
import { CheckBox } from "./CheckBox";

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
    <div className="m-2">
      <CheckBox
        checked={data.every((item) => item.isChecked)}
        onChange={onChangeSelectAll}
        label={"Select All"}
      />
      <form className="flex flex-col">
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
