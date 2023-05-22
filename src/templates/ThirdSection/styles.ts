import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import styled from "styled-components";
import Image from "next/image";
import ImageAnimeSport from "../../assets/images/thridSection/animeSport.png";
import ImageAnimeAciton from "../../assets/images/thridSection/animeAction.png";
import ImageAnimeComedy from "../../assets/images/thridSection/animeComedy.png";
import ImageAnimeHorror from "../../assets/images/thridSection/animeHorror.png";
import ImageAnimDrama from "../../assets/images/thridSection/animeDrama.png";
import ImageAnimeSliceOfLife from "../../assets/images/thridSection/animeSliceOfLife.png";

export const Container = styled(Aligment)``;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
`;
export const ImgAnimeSportWeb = styled(Image).attrs({
  src: ImageAnimeSport,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeSportMobile = styled(Image).attrs({
  src: ImageAnimeSport,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeActionWeb = styled(Image).attrs({
  src: ImageAnimeAciton,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeActionMobile = styled(Image).attrs({
  src: ImageAnimeAciton,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeComedyWeb = styled(Image).attrs({
  src: ImageAnimeComedy,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeComedyMobile = styled(Image).attrs({
  src: ImageAnimeComedy,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeHorrorWeb = styled(Image).attrs({
  src: ImageAnimeHorror,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeHorrorMobile = styled(Image).attrs({
  src: ImageAnimeHorror,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeDramaWeb = styled(Image).attrs({
  src: ImageAnimDrama,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeDramaMobile = styled(Image).attrs({
  src: ImageAnimDrama,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeSliceOfLifeWeb = styled(Image).attrs({
  src: ImageAnimeSliceOfLife,
  alt: "",
  width: 310,
  height: 230,
  unoptimized: true,
  priority: true,
})``;
export const ImgAnimeSliceOfLifeMobile = styled(Image).attrs({
  src: ImageAnimeSliceOfLife,
  alt: "",
  width: 230,
  height: 170,
  unoptimized: true,
  priority: true,
})``;
