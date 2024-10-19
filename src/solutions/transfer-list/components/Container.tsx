import { Item } from "../data";
import Checkbox from "./Checkbox";

type ContainerProps = {
  list: Item[];
  onCheckboxClick: (id: number) => void;
};
const Container = ({ list, onCheckboxClick }: ContainerProps) => {
  return (
    <div className="h-3/4 overflow-y-auto border p-3 rounded-xl border-black w-1/4">
      {list.map((item) => (
        <Checkbox key={item.id} item={item} onCheckboxClick={onCheckboxClick} />
      ))}
    </div>
  );
};

export default Container;
