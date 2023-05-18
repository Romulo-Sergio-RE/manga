interface AligmentProps {
  flex?: number;
  align?: "center" | "stretch" | "flex-start" | "flex-end" | "unset";
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  width?: string | number;
  height?: string | number;
  textAlign?: "center" | "left" | "right";
  gap?: number | string;
  children?: any;
}

export type { AligmentProps };
