import styled from "styled-components";
import Image from "next/image";
import ImageAppMobile from "../../assets/images/appPhoneMobile.png";
import ImageAppWeb from "../../assets/images/appPhoneWeb.png";
import ImageGoogle from "../../assets/images/google.png";
import ImageApple from "../../assets/images/apple.png";
import { karla } from "@/assets/fonts/font";
import { formatBreakpoint } from "@/utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0 0 0;
  gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0 0 0;
    align-items: start;
    flex-direction: row;
    gap: 100px;
  }
`;
export const ContainerImg = styled.div`
  position: relative;
  top: 8px;
`;
export const ContainerTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
export const Title = styled.div`
  width: 18.75rem;
  font-size: 2rem;
  font-family: ${karla.style.fontFamily};
  font-weight: 700;
  text-align: center;
  @media ${formatBreakpoint("up", "mobile")} {
    width: 21.25rem;
    text-align: left;
  }
`;
export const ContainerIconApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all 10s;
  :hover {
    transform: scale(1.05);
  }
  @media ${formatBreakpoint("up", "mobile")} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ImgAppWeb = styled(Image).attrs({
  src: ImageAppWeb,
  alt: "imagem do app para celular",
  width: 230,
  height: 330,
  unoptimized: true,
  priority: true,
})``;
export const ImgAppMobile = styled(Image).attrs({
  src: ImageAppMobile,
  alt: "imagem do app para celular",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;

export const ImgGoogle = styled(Image).attrs({
  src: ImageGoogle,
  alt: "icone do Google Play",
  width: 150,
  height: 50,
  unoptimized: true,
  priority: true,
})``;
export const ImgApple = styled(Image).attrs({
  src: ImageApple,
  alt: "icon do Apple Store",
  width: 150,
  height: 50,
  unoptimized: true,
  priority: true,
})``;
