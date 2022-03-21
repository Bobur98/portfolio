import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #637183;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
export const Wrapper = styled.div`
  background: #4e5a69;
  display: flex;
  flex: 1;
  max-width: 80%;
  width: 100%;
  flex-direction: row;
  margin: 20px 0;
  padding: 15px;
  border: 1px #4e5a69 solid;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    max-width: 70%;
  }
`;

export const ProjectImg = styled.img`
  height: 12rem;
  width: 15rem;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
  border-radius: 3px;

  @media (max-width: 1000px) {
    margin: 0 auto 15px auto;
    width: 90%;
  }
`;
export const ProjectVideo = styled.video`
  height: 12rem;
  width: 15rem;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
  border-radius: 3px;

  @media (max-width: 1000px) {
    margin: 0 auto 15px auto;
    width: 90%;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;

  padding: 0 1rem;
  @media (max-width: 1000px) {
    margin: 0 auto 15px auto;
    padding: 5px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;

  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  height: 35px;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: inherit;
  }
  @media (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;
