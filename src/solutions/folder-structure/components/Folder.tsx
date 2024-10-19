import { useState } from "react";
import { Files } from "../data";
import { VscFolder, VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaCss3, FaHtml5 } from "react-icons/fa";

type FolderProps = {
  files: Files;
};

const Folder = ({ files: { name, isFolder, children } }: FolderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center hover:bg-white px-2 py-1 rounded-md ${
          isFolder && "cursor-pointer"
        }`}
        onClick={onClick}
      >
        {isFolder && getLeadingIcon()}
        <div className="ms-1" />
        {getFolderTypeIcon()}
        <p className="ms-2">{name}</p>
      </div>

      <div className="ms-5">{isExpanded && getChildren()}</div>
    </div>
  );

  function getLeadingIcon() {
    return isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />;
  }

  function getFolderTypeIcon() {
    if (isFolder) {
      return <VscFolder />;
    } else if (name.endsWith(".js")) {
      return <IoLogoJavascript color="yellow" />;
    } else if (name.endsWith(".json")) {
      return <VscJson color="yellow" />;
    } else if (name.endsWith(".html")) {
      return <FaHtml5 color="red" />;
    } else if (name.endsWith(".css")) {
      return <FaCss3 color="blue" />;
    } else {
      return null;
    }
  }

  function getChildren() {
    if (children) {
      return children.map((folderItem) => (
        <Folder key={folderItem.name} files={folderItem} />
      ));
    } else {
      return null;
    }
  }

  function onClick() {
    setIsExpanded((prevValue) => !prevValue);
  }
};

export default Folder;
