import styled from "styled-components";
import { Aligment } from "../Aligment";
import { karla, notoSansJP } from "@/assets/fonts/font";

export const Container = styled(Aligment)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    font-family: ${karla.style.fontFamily};
    color: #000000;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    top: 0.625rem;
    left: 1.25rem;
  }
  .description {
    width: 11.875rem;
    font-size: 0.875rem;
    font-weight: 700;
    bottom: 0.875rem;
    left: 3.125rem;
  }
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
`;
