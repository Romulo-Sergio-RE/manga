import { karla, notoSansJP } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils/formatBreakpoint";
import styled from "styled-components";

export const Container = styled(Aligment)`
  align-items: center;
  justify-content: center;
`;
export const ContainerInfoManga = styled(Aligment)`
  align-items: center;
  justify-content: center;
  gap: 32px;
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
    width: 430px;
    font-size: 20px;
    text-align: left;
  }
`;
