import styled from "styled-components";
import Image from "next/image";
import ImageAnimeSport from "../../assets/images/BlackClover.png";
import { Aligment } from "@/components/Aligment";

export const Container = styled(Aligment)``;

export const ImgJujutsuKaisenWeb = styled(Image).attrs({
  src: ImageAnimeSport,
  alt: "",
  width: 230,
  height: 312,
  unoptimized: true,
  priority: true,
})``;
export const ImgJujutsuKaisenMobile = styled(Image).attrs({
  src: ImageAnimeSport,
  alt: "",
  width: 153,
  height: 203,
  unoptimized: true,
  priority: true,
})``;
