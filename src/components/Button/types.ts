export type ButtonPropsType = {
  children?: any;
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
  title: string;
};
