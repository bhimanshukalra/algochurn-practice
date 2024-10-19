type ImageCardProps = {
  src: string;
  onClick: () => void;
};
const ImageCard = ({ onClick, src }: ImageCardProps) => {
  return (
    <div
      key={src}
      className="flex h-[250px] w-[200px] m-2 rounded-md"
      onClick={onClick}
    >
      <div className="absolute hover:bg-black/50 h-[250px] w-[200px]" />
      <img src={src} className="bg-cover h-full w-full" />
    </div>
  );
};

export default ImageCard;
