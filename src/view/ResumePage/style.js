import styled from "styled-components";
import Img from "../../assets/imgs/resume.png";

export const Container = styled.div`
  display: grid;
  background-image: linear-gradient(to right bottom, #5d6a81d7, #818fa133),
    url(${Img});
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ heading }) => (heading ? "3rem" : "30rem")};
  &:last-child {
    margin-bottom: 10rem;
  }
  @media (max-width: 320px) {
    margin-top: ${({ heading }) => (heading ? "10rem" : "0")};
  }
`;
