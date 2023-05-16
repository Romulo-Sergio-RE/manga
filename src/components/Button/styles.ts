import { karla } from "@/assets/fonts/font";
import styled from "styled-components";

export const Container = styled.button`
  width: 12.5rem;
  height: 3.125rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0.5rem;
  font-family: ${karla.style.fontFamily};
  font-size: 1.25rem;
  font-weight: 500;
  border: none;
  box-shadow: 0rem 0.3125rem 0.9375rem 0rem rgba(0, 0, 0, 0.5);
`;
