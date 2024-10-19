import { images } from "../images";

type ModalProps = {
  src: string;
  closeModal: () => void;
  handleControlTabClick: (src: string) => void;
};

const Modal = ({ src, closeModal, handleControlTabClick }: ModalProps) => {
  return (
    <div
      className="bg-black/50 h-full w-full z-10 overflow-scroll flex absolute justify-center items-center flex-col"
      onClick={onClickBackDrop}
    >
      <div className="w-1/2 h-3/4 flex">
        <img src={src} className="bg-cover shadow-blue-700 shadow-xl" />
      </div>

      <div className="flex h-12 absolute bottom-0 justify-center">
        {images.map((src) => (
          <img
            key={src}
            className="bg-cover cursor-pointer hover:border hover:border-blue-900"
            src={src}
            onClick={(event) => onClickControlTab(event, src)}
          />
        ))}
      </div>
    </div>
  );

  function onClickBackDrop(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation();
    closeModal();
  }

  function onClickControlTab(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    src: string
  ) {
    event.stopPropagation();
    handleControlTabClick(src);
  }
};

export default Modal;
