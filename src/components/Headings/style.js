import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: ${({ status }) => (status ? "1.5rem" : "2rem")};
  letter-spacing: ${({ status }) => (status ? "4px" : "6px")};
  text-align: center;
  font-weight: ${({ status }) => status && "400"};
  color: var(--color-white);
  text-transform: uppercase;
  margin: 10px 0;
  & span {
    color: #758ba7;
  }
  @media (max-width: 320px) {
    font-size: ${({ status }) => (status ? ".8rem" : "1.5rem")};
    letter-spacing: ${({ status }) => (status ? "2px" : "3px")};
  }
`;
