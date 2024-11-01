import { useState } from "react";

export const InsertTextInDocument = () => {
  const [primaryText, setPrimaryText] = useState("");
  const [latestText, setLatestText] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (
    event:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    if (isLoading) {
      return;
    }
    setLatestText(textAreaValue);
    setTextAreaValue("");
    setTimeout(() => {
      setPrimaryText((prevVal) => `${prevVal}${textAreaValue}`);
      setLatestText("");
      setIsLoading(false);
    }, 2000);
    setIsLoading(true);
    event.preventDefault();
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="border"
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
          rows={5}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        />
      </form>
      <div className="flex flex-col">
        <p>{primaryText}</p>
        <div className="flex">
          <p className="bg-blue-200">{latestText}</p>
        </div>
      </div>
    </div>
  );
};
