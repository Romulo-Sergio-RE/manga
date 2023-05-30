import { karla, notoSansJP } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils/formatBreakpoint";
import styled from "styled-components";
import Image from "next/image";
import ImageKimetsu from "../../assets/images/firstSection/anime-1.png";
import ImageBungou from "../../assets/images/firstSection/anime-2.png";
import ImageHaikyuu from "../../assets/images/firstSection/anime-3.png";
import ImageOnePiece from "../../assets/images/firstSection/anime-4.png";

type PropsImageBack = {
  coverimg: string;
};
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
export const ImgBack = styled(Aligment)<PropsImageBack>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
  opacity: 0.6;

  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.coverimg});
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
export const ImgKimestu = styled(Image).attrs({
  src: ImageKimetsu,
  alt: "imagem do one piece",
  width: 286,
  height: 280,
  unoptimized: true,
  priority: true,
})``;
export const ImgKimestuWeb = styled(Image).attrs({
  src: ImageKimetsu,
  alt: "imagem do one piece",
  width: 386,
  height: 380,
  unoptimized: true,
  priority: true,
})``;
export const ImgBungou = styled(Image).attrs({
  src: ImageBungou,
  alt: "imagem do one piece",
  width: 286,
  height: 280,
  unoptimized: true,
  priority: true,
})``;
export const ImgBungouWeb = styled(Image).attrs({
  src: ImageBungou,
  alt: "imagem do one piece",
  width: 386,
  height: 380,
  unoptimized: true,
  priority: true,
})``;
export const ImgHaikyuu = styled(Image).attrs({
  src: ImageHaikyuu,
  alt: "imagem do one piece",
  width: 286,
  height: 280,
  unoptimized: true,
  priority: true,
})``;
export const ImgHaikyuuWeb = styled(Image).attrs({
  src: ImageHaikyuu,
  alt: "imagem do one piece",
  width: 386,
  height: 380,
  unoptimized: true,
  priority: true,
})``;
