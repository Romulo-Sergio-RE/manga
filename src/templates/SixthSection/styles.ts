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
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #202020;
    transition: all 0.5s ease-out;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 30px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fbff5a;
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
  display: flex;
  align-items: baseline;
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
    flex-direction: row;
  }
`;
export const ContainerDayOfWeek = styled.div`
  :hover {
    background-color: #fbff5a;
    color: #202020;
  }
`;
export const DayOfWeekButton = styled.button`
  padding: 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #202020;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-family: ${karla.style.fontFamily};
  :hover {
    background-color: #fbff5a;
    color: #202020;
  }
`;
export const ContainerCarousel = styled.div``;
