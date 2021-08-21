import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Skills = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  .skill {
    justify-content: space-between;
  }
  @media (max-width: 320px) {
    width: 100%;
    max-width: 80%;
  }
`;
export const SkillName = styled.div`
  margin: 1.2rem 0;
  color: var(--color-white);
  font-size: small;
  text-transform: uppercase;
  @media (max-width: 320px) {
    margin: 0.8rem 3rem 0.8rem 0;
    font-size: 10px;
  }
`;
export const SkillBar = styled.div`
  height: 10px;
  position: relative;
  transform: translate(15%, -120%);
  @media (max-width: 320px) {
    height: 8px;
    transform: translate(28%, -130%);
  }
`;

const fillBars = keyframes`
from{
  width: 0;
}
to{
  width:100%;
}
`;
export const SkillPer = styled.div`
  height: 10px;
  border-radius: 8px;
  background-color: var(--color-green);
  animation: ${fillBars} 5.5s ease 1;
  position: relative;
  @media (max-width: 320px) {
    height: 8px;
    border-radius: 2px;
  }
  &::before {
    content: ${({ per }) => `"${per}%"`};
    position: absolute;
    padding: 0 6px;
    color: var(--color-white);
    font-size: 12px;
    right: 0;
    transform: translateX(180%);
    @media (max-width: 320px) {
      padding: 0;
    }
  }
`;
