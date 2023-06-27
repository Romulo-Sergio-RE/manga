import { karla, notoSansJP } from "@/assets/fonts/font";
import { formatBreakpoint } from "@/utils";
import Image from "next/image";
import styled from "styled-components";
import ImageFooter from "../../assets/images/imgFooter.png";
import ImageFaceBook from "../../assets/images/facebook.png";
import ImageTwitter from "../../assets/images/twitter.png";
import ImageInstagram from "../../assets/images/instagram.png";
import ImageYoutube from "../../assets/images/youtube.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 50px;
  background-color: #dad5c0;
`;
export const Footer = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  height: 3.125rem;
  background-color: #000000;
  color: #fff;
  display: flex;
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
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  transition: all 10s;
  :hover {
    transform: scale(1.05);
  }
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
