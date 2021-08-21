import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Line = styled.div`
  height: 16rem;
  background-color: var(--color-resume-container-blue);
  display: flex;
  flex-direction: column;
  @media (max-width: 320px) {
    height: 0;
  }
`;
export const Wrapper = styled.div`
  background-color: var(--color-resume-container-blue);
  box-shadow: 0 0 10px 1px #333;
  border-radius: 1px;
  justify-content: center;
  margin: 10px auto 0 auto;
  width: 60%;
  @media (max-width: 414px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
  & a {
    text-decoration: none;
  }
`;
export const LogoWrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 414px) {
    margin-top: 2rem;
  }
`;
export const Text = styled.p`
  text-align: center;
  align-items: center;
  color: var(--color-white);
  font-size: 15px;
  margin: 5rem;
  line-height: 2;
  @media (max-width: 414px) {
    margin: 2rem;
    letter-spacing: 1px;
  }
  @media (max-width: 800px) {
    margin: 3rem;
  }
`;
export const Button = styled.button`
  height: 3rem;
  width: 13rem;
  display: flex;
  margin: 0 auto 5rem auto;
  justify-content: center;
  align-items: center;
  color: var(--color-green);
  background-color: inherit;
  font-size: 13px;
  border-color: var(--color-green);
  border-width: 1px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-green);
    color: var(--color-white);
  }
`;
