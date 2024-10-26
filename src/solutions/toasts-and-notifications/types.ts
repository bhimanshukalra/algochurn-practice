export type Position = {
  id: number;
  name: string;
  value: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  style: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};
