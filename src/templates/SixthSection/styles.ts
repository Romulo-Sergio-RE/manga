import { karla } from "@/assets/fonts/font";
import { Aligment } from "@/components/Aligment";
import { formatBreakpoint } from "@/utils";
import styled from "styled-components";

export const Container = styled(Aligment)`
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  gap: 50px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
  }
  .swiper {
    width: 350px;
    height: 50px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: all 0.5s ease-out;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 32px;
  }
`;
export const ContainerRelease = styled.div`
  width: 350px;
  height: 500px;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-radius: 20px;
  border: solid 2px #fbff5a;
  box-shadow: 0rem 0.3125rem 0.9375rem 0rem rgba(0, 0, 0, 0.5);
  padding: 0 10px;
  @media ${formatBreakpoint("up", "tablet")} {
    width: 550px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 650px;
  }
`;
export const ContainerDayOfWeek = styled.div`
  :hover {
    background-color: green;
  }
`;
export const DayOfWeekButton = styled.button`
  padding: 5px;
  cursor: pointer;
`;
export const ContainerCarousel = styled.div``;
