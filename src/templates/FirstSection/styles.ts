import { karla, notoSansJP } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils/formatBreakpoint";
import styled from "styled-components";
import Image from "next/image";
import ImageOnePiece from "../../assets/images/firstSection/anime-4.png";

export const Container = styled(Aligment)`
  align-items: center;
  justify-content: center;
  padding: 0 0 60px 0;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 0 0 90px 0;
  }
`;
export const ContainerInfoManga = styled(Aligment)`
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const ContainerManga = styled(Aligment)`
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media ${formatBreakpoint("up", "tablet")} {
    gap: 32px;
  }
`;
export const ContainerInfo = styled(Aligment)`
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 8px;
  @media ${formatBreakpoint("up", "tablet")} {
    flex-direction: row;
    padding: 90px 0;
    gap: 30px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 90px;
  }
`;
export const ImgBack = styled(Aligment)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
  opacity: 0.6;

  background-position: center;
  background-size: cover;
  background-image: url("https://media.kitsu.io/manga/38/cover_image/020c994fbf81443b79723d8fca369df0.jpg");
`;
export const Title = styled(Aligment)`
  font-size: 24px;
  font-family: ${karla.style.fontFamily};
  font-weight: 700;
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 32px;
  }
`;
export const Text = styled(Aligment)`
  width: 350px;
  font-size: 16px;
  font-family: ${notoSansJP.style.fontFamily};
  font-weight: 500;
  text-align: center;
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 20px;
    text-align: left;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 430px;
  }
`;
export const ImgOnePiece = styled(Image).attrs({
  src: ImageOnePiece,
  alt: "imagem do one piece",
  width: 286,
  height: 280,
  unoptimized: true,
  priority: true,
})``;
export const ImgOnePieceWeb = styled(Image).attrs({
  src: ImageOnePiece,
  alt: "imagem do one piece",
  width: 386,
  height: 380,
  unoptimized: true,
  priority: true,
})``;
