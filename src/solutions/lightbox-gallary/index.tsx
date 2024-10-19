import { useState } from "react";
import { images } from "./images";
import Modal from "./components/Modal";
import ImageCard from "./components/ImageCard";

const LightboxGallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="grid grid-cols-3">
      {selectedImage && (
        <Modal
          src={selectedImage}
          closeModal={closeModal}
          handleControlTabClick={handleControlTabClick}
        />
      )}
      {images.map((src) => (
        <ImageCard key={src} src={src} onClick={() => onClick(src)} />
      ))}
    </div>
  );

  function onClick(src: string) {
    setSelectedImage(src);
  }

  function closeModal() {
    setSelectedImage("");
  }

  function handleControlTabClick(src: string) {
    setSelectedImage(src);
  }
};

export default LightboxGallery;
