import Folder from "./components/Folder";
import { files } from "./data";

const FolderStructure = () => {
  return (
    <div className="h-screen bg-[#18181b]">
      <div className="w-1/3 h-screen bg-[#27272a]">
        <Folder files={files} />
      </div>
      <p className="mb-10">FolderStructure</p>
    </div>
  );
};

export default FolderStructure;
