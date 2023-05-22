import { karla } from "@/assets/fonts/font";
import styled from "styled-components";
import { Aligment } from "../Aligment";

export const Container = styled(Aligment)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  span {
    position: absolute;
    z-index: 2;
    bottom: 0.375rem;
    right: 0.125rem;
    font-family: ${karla.style.fontFamily};
    font-size: 0.75rem;
    font-weight: 700;
    color: #000000;
  }
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
`;
export const SubTitle = styled.div`
  font-family: ${karla.style.fontFamily};
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
  padding-top: 0.625rem;
`;

export const Title = styled.div`
  font-family: ${karla.style.fontFamily};
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
`;
