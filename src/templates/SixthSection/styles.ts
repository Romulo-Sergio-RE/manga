import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils";
import styled from "styled-components";
import Image from "next/image";
import ImageBlackClover from "../../assets/images/BlackClover.png";
import ImageOnePiece from "../../assets/images/OnePiece.png";
import ImageOnePunchMan from "../../assets/images/OnePuchMan.png";
import ImageBokuNoHero from "../../assets/images/BokuNoHero.png";
import ImageChainsawMan from "../../assets/images/ChainsawMan.png";
import ImageTokyoRevengers from "../../assets/images/TokyoRevengers.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 50px;
  background-color: #dad5c0;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 32px;
  }
`;
export const ContainerRelease = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  background-color: #202020;
  border-radius: 20px;
  border: solid 2px #fbff5a;
  box-shadow: 0rem 0.3125rem 0.9375rem 0rem rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media ${formatBreakpoint("up", "tablet")} {
    width: 650px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 750px;
  }
`;
export const ContainerCarousel = styled.div`
  .swiper {
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #202020;
    transition: all 0.5s ease-out;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 30px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fbff5a;
  }
`;
export const ContainerManga = styled.div`
  width: 308px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .swiper {
    width: 350px;
    height: 400px;
    border-radius: 10px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    background-color: #fbff5a;
  }
  @media ${formatBreakpoint("up", "tablet")} {
    width: 608px;
  }
`;
export const ContainerDayOfWeek = styled.div`
  :hover {
    background-color: #fbff5a;
    color: #202020;
  }
`;
export const DayOfWeekButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #202020;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
`;

export const ImgOnePieceMobile = styled(Image).attrs({
  src: ImageOnePiece,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgBlackCloverMobile = styled(Image).attrs({
  src: ImageBlackClover,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgBokuNoheroMobile = styled(Image).attrs({
  src: ImageBokuNoHero,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgOnePunchManMobile = styled(Image).attrs({
  src: ImageOnePunchMan,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgChainsawManMobile = styled(Image).attrs({
  src: ImageChainsawMan,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgTokyoRevengersMobile = styled(Image).attrs({
  src: ImageTokyoRevengers,
  alt: "",
  width: 180,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
