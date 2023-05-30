import styled from "styled-components";
import Image from "next/image";
import ImageAnimeOne from "../../assets/images/TokyoRevengers.png";
import ImageAnimeTwo from "../../assets/images/BlackClover.png";
import ImageAnimeThree from "../../assets/images/ChainsawMan.png";
import ImageAnimeFour from "../../assets/images/BokuNoHero.png";
import ImageAnimefive from "../../assets/images/OnePiece.png";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils";
import { karla } from "@/assets/fonts/font";

export const Container = styled(Aligment)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  gap: 40px;
  border-radius: 40px 40px 0 0;
  background-color: #dad5c0;
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 100px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    border-radius: 80px 80px 0 0;
  }
`;
export const ContainerGridMangas = styled(Aligment)`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 32px;
  column-gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    grid-template-columns: auto auto auto auto;
    row-gap: 60px;
    column-gap: 60px;
  }
  @media ${formatBreakpoint("down", "laptop")} {
    grid-template-columns: auto auto;
  }
  @media ${formatBreakpoint("up", "laptopL")} {
    grid-template-columns: auto auto auto auto;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 32px;
  }
`;

export const ImgTokyoRevengersWeb = styled(Image).attrs({
  src: ImageAnimeOne,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgTokyoRevengersMobile = styled(Image).attrs({
  src: ImageAnimeOne,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgBlackCloverWeb = styled(Image).attrs({
  src: ImageAnimeTwo,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgBlackCloverMobile = styled(Image).attrs({
  src: ImageAnimeTwo,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgChainsawManWeb = styled(Image).attrs({
  src: ImageAnimeThree,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgChainsawManMobile = styled(Image).attrs({
  src: ImageAnimeThree,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgBokuNoHeroWeb = styled(Image).attrs({
  src: ImageAnimeFour,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgBokuNoHeroMobile = styled(Image).attrs({
  src: ImageAnimeFour,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgOnePieceWeb = styled(Image).attrs({
  src: ImageAnimefive,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgOnePieceMobile = styled(Image).attrs({
  src: ImageAnimefive,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
