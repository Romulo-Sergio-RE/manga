import { karla } from "@/assets/fonts/font";
import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 12.5rem;
    height: 3.125rem;
    background-color: #000000;
    color: #ffffff;
    border-radius: 0.5rem;
    font-family: ${karla.style.fontFamily};
    font-size: 1.25rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    box-shadow: 0rem 0.3125rem 0.9375rem 0rem rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-out;
  }
  :hover {
    transform: scale(1.02);
    transition: all 0.5s;
    background-color: #fbff5a;
    color: #000000;
  }
`;
