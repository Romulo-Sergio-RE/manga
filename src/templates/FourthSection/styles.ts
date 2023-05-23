import styled from "styled-components";
import Image from "next/image";
import ImageAppMobile from "../../assets/images/appPhoneMobile.png";
import ImageAppWeb from "../../assets/images/appPhoneWeb.png";
import ImageGoogle from "../../assets/images/google.png";
import ImageApple from "../../assets/images/apple.png";
import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";

export const Container = styled.div``;

export const ImgAppWeb = styled(Image).attrs({
  src: ImageAppWeb,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgAppMobile = styled(Image).attrs({
  src: ImageAppMobile,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;

export const ImgGoogle = styled(Image).attrs({
  src: ImageGoogle,
  alt: "",
  unoptimized: true,
  priority: true,
})``;
export const ImgApple = styled(Image).attrs({
  src: ImageApple,
  alt: "",
  unoptimized: true,
  priority: true,
})``;
