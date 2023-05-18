import styled from "styled-components";
import { AligmentProps } from "./types";

const AligmentStyled = styled.div<AligmentProps>((props) => ({
  display: "flex",
  flex: props.flex,
  alignItems: props.align,
  justifyContent: props.justify,
  flexDirection: props.direction ?? "column",
  flexWrap: props.wrap,
  width: props.width,
  height: props.height,
  textAlign: props.textAlign,
  gap: props.gap,
}));

export { AligmentStyled };
