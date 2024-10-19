import { Item } from "../data";

type CheckboxProps = {
  item: Item;
  onCheckboxClick: (id: number) => void;
};

const Checkbox = ({ item, onCheckboxClick }: CheckboxProps) => {
  const { title, checked, id } = item;
  return (
    <p
      key={id}
      className={`border px-8 py-2 rounded-xl my-2 border-black text-center cursor-pointer ${
        checked && "bg-blue-500 text-white"
      }`}
      onClick={onClick}
    >
      {title}
    </p>
  );

  function onClick() {
    onCheckboxClick(id);
  }
};

export default Checkbox;
