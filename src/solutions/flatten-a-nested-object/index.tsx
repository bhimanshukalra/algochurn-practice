import { useEffect } from "react";

const FlattenANestedObject = () => {
  const input = {
    name: "Manu",
    age: 21,
    characteristics: {
      height: "6 feet",
      complexion: "dark",
      hair: "black",
    },
    techStack: {
      language: "Javascript",
      framework: {
        name: "Nextjs",
        version: "12",
      },
    },
  };

  useEffect(() => {
    console.log(flattenObj(input));
  }, []);
  return (
    <div>
      FlattenANestedObject
      <p className="mt-8">{JSON.stringify(input)}</p>
      <p className="mt-8">{JSON.stringify(flattenObj(input))}</p>
    </div>
  );

  function flattenObj(obj: any, parent: string = "") {
    let response: { [key: string]: string } = {};
    Object.entries(obj).map((item) => {
      const keyPrefix = parent ? `${parent}.` : "";
      const key = `${item[0]}`;
      const keyWithParentName = `${keyPrefix}${item[0]}`;
      const value = item[1];
      if (typeof value === "object") {
        response = { ...response, ...flattenObj(obj[key], key) };
      } else {
        response[keyWithParentName] = `${value}`;
      }
    });
    return response;
  }
};

export default FlattenANestedObject;
