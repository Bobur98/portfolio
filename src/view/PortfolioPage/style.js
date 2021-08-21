import styled, { keyframes } from "styled-components";
import Portfolio from "../../assets/imgs/portfolio.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-image: linear-gradient(
      180deg,
      #637183 10%,
      #637183ef,
      #637183 100%
    ),
    url(${Portfolio});
  background-size: cover;
`;
const projectAppear = keyframes`
from{
  opacity: 0;
  transform: translateY(3rem);
}
to{
  opacity: 1;
  transform: translateY(0);
}
`;
export const Wrapper = styled.div`
  margin-bottom: ${({ experience }) => (experience ? "35rem" : "25rem")};
  margin-top: 9rem;
  animation: ${projectAppear} 1s ease-out forwards;
  @media (max-width: 720px) {
    margin-top: ${({ experience }) => (experience ? "35rem" : "0")};
  }
`;
