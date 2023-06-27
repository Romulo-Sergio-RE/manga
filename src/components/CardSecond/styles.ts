import styled from "styled-components";
import { karla, notoSansJP } from "@/assets/fonts/font";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    font-family: ${karla.style.fontFamily};
    color: #000000;
  }
  .title {
    font-size: 18px;
    font-weight: 800;
    top: 10px;
    left: 20px;
  }
  .description {
    width: 160px;
    font-size: 14px;
    font-weight: 700;
    bottom: 14px;
    left: 40px;
  }
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
`;
