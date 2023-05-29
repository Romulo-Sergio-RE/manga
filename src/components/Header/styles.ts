import { karla } from "@/assets/fonts/font";
import { formatBreakpoint } from "@/utils";
import styled from "styled-components";
export const ContainerInternal = styled.div`
  width: 100%;
  .nav__menuOpen {
    height: 2.5rem;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: right;
    .link {
      display: none;
      font-size: 1.125rem;
      font-weight: 500;
      font-family: ${karla.style.fontFamily};
    }
    .icone__close {
      display: none;
    }
    .icone__menu {
      width: 1.5rem;
      height: 1.5rem;
      color: #fff;
      margin-right: 0.625rem;
    }
  }
  .nav__Down {
    width: 100%;
    height: 13.125rem;
    background-color: #000;
    display: flex;
    align-items: flex-end;
    justify-content: initial;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    .link {
      width: 100%;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      font-size: 1.125rem;
      font-weight: 500;
      font-family: ${karla.style.fontFamily};
      :active {
        color: red;
        background-color: green;
      }
    }
    .icone__close {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      color: #fff;
      margin: 0.625rem 0.625rem 0.9375rem 0;
    }
    .icone__menu {
      display: none;
    }
  }

  @media ${formatBreakpoint("up", "mobile")} {
    .nav__menuDown {
      display: none;
    }
    .nav__menuOpen {
      justify-content: center;
      height: 3.125rem;
      .link {
        display: block;
        color: #fff;
        padding: 0 10px;
        font-size: 16px;
      }
      .icone__menu {
        display: none;
      }
    }
  }
  @media ${formatBreakpoint("up", "tablet")} {
    .nav__menuOpen {
      .link {
        display: block;
        color: #fff;
        padding: 0 20px;
        font-size: 18px;
      }
    }
  }
`;
export const Teste = styled.div`
  position: absolute;
  left: 43%;
  color: #fff;
  font-size: 20px;
  font-family: ${karla.style.fontFamily};
  font-weight: 700;
  padding: 10px 0;
  @media ${formatBreakpoint("up", "mobile")} {
    padding: 0;
    position: none;
    left: 5%;
  }
`;
