import { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const FullScreenModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <input
        type="button"
        onClick={toggleModalVisibility}
        value={"Show Modal"}
        className="border py-2 px-4"
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalVisible && <Modal onTapClose={toggleModalVisibility} />}
      </AnimatePresence>
    </div>
  );

  function toggleModalVisibility() {
    setIsModalVisible((prevValue) => !prevValue);
  }
};

export default FullScreenModal;
