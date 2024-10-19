import { useState } from "react";
import { data, Item } from "./data";
import Container from "./components/Container";
import Controls from "./components/Controls";

enum ListType {
  left,
  right,
}

const TransferList = () => {
  const [leftList, setLeftList] = useState(data);
  const [rightList, setRightList] = useState<Item[]>([]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Container
        list={leftList}
        onCheckboxClick={(id) => onListCheckboxClick(id, ListType.left)}
      />
      <Controls
        onPressLeftTransfer={onPressLeftTransfer}
        onPressRightTransfer={onPressRightTransfer}
      />
      <Container
        list={rightList}
        onCheckboxClick={(id) => onListCheckboxClick(id, ListType.right)}
      />
    </div>
  );

  function onListCheckboxClick(id: number, listType: ListType) {
    const targetList = listType === ListType.left ? leftList : rightList;
    const updatedList = targetList.map((item) => {
      if (id == item.id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    if (listType === ListType.left) {
      setLeftList(updatedList);
    } else if (listType === ListType.right) {
      setRightList(updatedList);
    }
  }

  function onPressLeftTransfer() {
    let updatedLeftList = rightList.filter(({ checked }) => checked);

    const updatedRightList = rightList.filter(({ checked }) => !checked);

    updatedLeftList = updatedLeftList.map((item) => {
      return { ...item, checked: false };
    });

    setLeftList(sortList([...leftList, ...updatedLeftList]));
    setRightList(sortList(updatedRightList));
  }

  function onPressRightTransfer() {
    const updatedLeftList = leftList.filter(({ checked }) => !checked);

    let updatedRightList = leftList.filter(({ checked }) => checked);

    updatedRightList = updatedRightList.map((item) => {
      return { ...item, checked: false };
    });

    setLeftList(sortList(updatedLeftList));
    setRightList(sortList([...rightList, ...updatedRightList]));
  }

  function sortList(list: Item[]) {
    return list.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
  }
};

export default TransferList;
