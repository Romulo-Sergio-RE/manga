import styled from "styled-components";
import { karla } from "@/assets/fonts/font";
import { formatBreakpoint } from "@/utils";

type ProspTitle = {
  colorTitle: string | "#000";
};
export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
`;
export const ImgManga = styled.div`
  filter: drop-shadow(0.0625rem 0.375rem 0.25rem rgb(0, 0, 0, 0.6));
`;
export const Title = styled.div<ProspTitle>`
  font-size: 1.25rem;
  font-family: ${karla.style.fontFamily};
  font-weight: 700;
  color: ${(props) => props.colorTitle};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 1.5rem;
  }
`;
