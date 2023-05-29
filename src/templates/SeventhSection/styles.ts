import { karla, notoSansJP } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils";
import Image from "next/image";
import styled from "styled-components";
import ImageFooter from "../../assets/images/imgFooter.png";
import ImageFaceBook from "../../assets/images/facebook.png";
import ImageTwitter from "../../assets/images/twitter.png";
import ImageInstagram from "../../assets/images/instagram.png";
import ImageYoutube from "../../assets/images/youtube.png";

export const Container = styled(Aligment)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.75rem 0 0 0;
  gap: 2.5rem;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 5.625rem 0 0 0;
    gap: 3.75rem;
  }
`;
export const Test = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0rem;
`;
export const Footer = styled(Aligment)`
  width: 100%;
  height: 3.125rem;
  background-color: #000000;
  color: #fff;
  position: absolute;
  bottom: 0rem;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: ${karla.style.fontFamily};
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  font-family: ${karla.style.fontFamily};
  text-align: center;
`;
export const Text = styled.div`
  width: 21.875rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${notoSansJP.style.fontFamily};
  text-align: center;
  @media ${formatBreakpoint("up", "tablet")} {
    width: 31.25rem;
    font-size: 1.125rem;
  }
`;
export const ContainerIcons = styled(Aligment)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;

export const ImgFooter = styled(Image).attrs({
  src: ImageFooter,
  alt: "imagem do footer",
  unoptimized: true,
  priority: true,
})``;
export const ImgFaceBook = styled(Image).attrs({
  src: ImageFaceBook,
  alt: "icon facebook",
  unoptimized: true,
  priority: true,
})``;
export const ImgTwitter = styled(Image).attrs({
  src: ImageTwitter,
  alt: "icon twitter",
  unoptimized: true,
  priority: true,
})``;
export const ImgInstagram = styled(Image).attrs({
  src: ImageInstagram,
  alt: "icon instagram",
  unoptimized: true,
  priority: true,
})``;
export const ImgYoutube = styled(Image).attrs({
  src: ImageYoutube,
  alt: "icon youtube",
  unoptimized: true,
  priority: true,
})``;
