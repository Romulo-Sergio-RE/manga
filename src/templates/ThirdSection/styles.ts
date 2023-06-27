import { karla } from "@/assets/fonts/font";
import styled from "styled-components";
import Image from "next/image";
import ImageAnimeSport from "../../assets/images/thridSection/animeSport.png";
import ImageAnimeAciton from "../../assets/images/thridSection/animeAction.png";
import ImageAnimeComedy from "../../assets/images/thridSection/animeComedy.png";
import ImageAnimeHorror from "../../assets/images/thridSection/animeHorror.png";
import ImageAnimDrama from "../../assets/images/thridSection/animeDrama.png";
import ImageAnimeSliceOfLife from "../../assets/images/thridSection/animeSliceOfLife.png";
import { formatBreakpoint } from "@/utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    gap: 50px;
  }
`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 32px;
  column-gap: 32px;
  @media ${formatBreakpoint("up", "mobile")} {
    grid-template-columns: auto auto;
  }
  @media ${formatBreakpoint("up", "tablet")} {
    grid-template-columns: auto auto auto;
    row-gap: 48px;
    column-gap: 48px;
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

export const ImgAnimeSportMobile = styled(Image).attrs({
  src: ImageAnimeSport,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;

export const ImgAnimeActionMobile = styled(Image).attrs({
  src: ImageAnimeAciton,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;

export const ImgAnimeComedyMobile = styled(Image).attrs({
  src: ImageAnimeComedy,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;

export const ImgAnimeHorrorMobile = styled(Image).attrs({
  src: ImageAnimeHorror,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;

export const ImgAnimeDramaMobile = styled(Image).attrs({
  src: ImageAnimDrama,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;

export const ImgAnimeSliceOfLifeMobile = styled(Image).attrs({
  src: ImageAnimeSliceOfLife,
  alt: "",
  width: 200,
  height: 140,
  unoptimized: true,
  priority: true,
})``;
