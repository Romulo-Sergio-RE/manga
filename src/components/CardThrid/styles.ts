import styled from "styled-components";
import { Aligment } from "../Aligment";
import { karla } from "@/assets/fonts/font";

export const Container = styled(Aligment)`
  align-items: baseline;
  justify-content: center;
  gap: 0.625rem;
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
`;
export const Title = styled.div`
  font-size: 1.25rem;
  font-family: ${karla.style.fontFamily};
  font-weight: 500;
  color: #000000;
`;
