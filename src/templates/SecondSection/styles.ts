import styled from "styled-components";
import Image from "next/image";
import ImageAnimeOne from "../../assets/images/secondSection/JujutsuKaisen.png";
import ImageAnimeTwo from "../../assets/images/secondSection/BungouStrayDogs.png";
import ImageAnimeThree from "../../assets/images/secondSection/BlueLock.png";
import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";

export const Container = styled(Aligment)``;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
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
