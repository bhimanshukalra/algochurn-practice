import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

type ControlsProps = {
  onPressLeftTransfer: () => void;
  onPressRightTransfer: () => void;
};

const Controls = ({
  onPressLeftTransfer,
  onPressRightTransfer,
}: ControlsProps) => {
  return (
    <div className="px-10 ">
      <LuChevronLeftCircle
        size={30}
        className="mb-5 hover:bg-gray-200 rounded-full"
        onClick={onPressLeftTransfer}
      />
      <LuChevronRightCircle
        size={30}
        onClick={onPressRightTransfer}
        className="hover:bg-gray-200 rounded-full"
      />
    </div>
  );
};

export default Controls;
