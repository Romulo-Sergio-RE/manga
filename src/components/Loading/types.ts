export type LoadingPropsType = {
  children?:any;
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
};
