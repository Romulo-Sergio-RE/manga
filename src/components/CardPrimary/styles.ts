import styled from "styled-components";
import Image from "next/image";
import ImageAnime from "../../assets/images/JujutsuKaisen.png";

export const Container = styled.div`
  div {
    filter: drop-shadow(1px 6px 4px rgb(0, 0, 0, 0.6));
  }
`;
export const ImgJujutsuKaisenWeb = styled(Image).attrs({
  src: ImageAnime,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgJujutsuKaisenMobile = styled(Image).attrs({
  src: ImageAnime,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
