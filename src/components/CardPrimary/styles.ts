import { karla } from "@/assets/fonts/font";
import styled from "styled-components";
import { Aligment } from "../Aligment";
import { formatBreakpoint } from "@/utils";

export const Container = styled(Aligment)`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
  span {
    position: absolute;
    z-index: 2;
    bottom: 0.375rem;
    right: 0.125rem;
    font-family: ${karla.style.fontFamily};
    font-size: 0.75rem;
    font-weight: 700;
    color: #000000;
  }
  @media ${formatBreakpoint("up", "tablet")} {
    span {
      font-size: 16px;
      bottom: 10px;
      right: 8px;
    }
  }
`;
export const SubTitle = styled.div`
  font-family: ${karla.style.fontFamily};
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
  padding-top: 0.625rem;
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  font-family: ${karla.style.fontFamily};
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 1.25rem;
  }
`;
