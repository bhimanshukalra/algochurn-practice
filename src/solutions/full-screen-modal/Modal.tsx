import { motion } from "framer-motion";

type ModalProps = {
  onTapClose: () => void;
  title?: string;
};

const Modal = ({ onTapClose, title }: ModalProps) => {
  return (
    <div
      className="absolute h-screen w-screen bg-black/50 flex
    justify-center items-center top-0"
      onClick={onTapClose}
    >
      <motion.div
        className="bg-white p-10"
        variants={getDropInVariant()}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <p>{title ?? "This is a modal"}</p>
        <input
          type="button"
          onClick={onTapClose}
          value={"Close Modal"}
          className="border py-2 px-4  mt-10"
        />
      </motion.div>
    </div>
  );

  function getDropInVariant() {
    return {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };
  }
};

export default Modal;
