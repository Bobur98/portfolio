import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProjectWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: auto auto auto;
  left: 50%;
  transform: translateX(-50%);
  margin: 6rem 0 10rem 0;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ProjectItem = styled.img`
  height: 12rem;
  width: 15rem;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
  @media (max-width: 720px) {
    height: 15rem;
    width: 18rem;
  }
`;
export const Button = styled.a`
  color: #44474d;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: normal;
  width: fit-content;
  height: fit-content;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 4.5rem;
  &:hover {
    color: #fff;
    transform: scale(0.95);
  }
`;
