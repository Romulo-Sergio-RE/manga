import styled from "styled-components";
import Image from "next/image";
import ImageAnimeOne from "../../assets/images/secondSection/JujutsuKaisen.png";
import ImageAnimeTwo from "../../assets/images/secondSection/BungouStrayDogs.png";
import ImageAnimeThree from "../../assets/images/secondSection/BlueLock.png";
import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 50px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
  }
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
`;
export const ContainerMangas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  @media ${formatBreakpoint("up", "tablet")} {
    gap: 32px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 60px;
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
export const ImgJujutsuKaisenWeb = styled(Image).attrs({
  src: ImageAnimeOne,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgJujutsuKaisenMobile = styled(Image).attrs({
  src: ImageAnimeOne,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgBungouStrayDogsWeb = styled(Image).attrs({
  src: ImageAnimeTwo,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgBungouStrayDogsMobile = styled(Image).attrs({
  src: ImageAnimeTwo,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
export const ImgBlueLockWeb = styled(Image).attrs({
  src: ImageAnimeThree,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgBlueLockMobile = styled(Image).attrs({
  src: ImageAnimeThree,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
