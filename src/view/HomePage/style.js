import styled from 'styled-components';
import Img from '../../assets/imgs/myimage.png';
export const Container = styled.div`
  display: grid;
  background-image: linear-gradient(
      to right,
      #818fa1 45%,
      #818fa194 100%,
      #818fa19d 1%
    ),
    url(${Img});
  background-attachment: fixed;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  letter-spacing: ${({ status }) => (status ? '1.3rem' : '1.5rem')};
  font-size: ${({ status }) => (status ? '1.5rem' : '3rem')};
  font-weight: ${({ status }) => (status ? 'normal' : '800')};
  text-transform: uppercase;
  color: #ffffff;
  margin-top: ${({ status }) => (status ? '6rem' : '0')};
  line-height: 1.5;

  & span {
    color: green;
  }
  @media (max-width: 900px) {
    letter-spacing: ${({ status }) => (status ? '1.2rem' : '1.3rem')};
    font-size: ${({ status }) => (status ? '1rem' : '1.5rem')};
    margin-top: ${({ status }) => (status ? '4rem' : '0')};
    font-weight: ${({ status }) => (status ? 'normal' : '600')};
  }
  @media (max-width: 600px) {
    letter-spacing: ${({ status }) => (status ? '.8rem' : '1rem')};
    font-size: ${({ status }) => (status ? '.8rem' : '1.2rem')};
    margin-top: ${({ status }) => (status ? '4rem' : '0')};
    font-weight: ${({ status }) => (status ? 'normal' : '600')};
  }
  @media (max-width: 500px) {
    letter-spacing: ${({ status }) => (status ? '.3rem' : '.5rem')};
    font-size: ${({ status }) => (status ? '1rem' : '1.5rem')};
    margin-top: ${({ status }) => (status ? '4rem' : '0')};
    font-weight: ${({ status }) => (status ? 'normal' : '600')};
  }
  @media (max-width: 300px) {
    letter-spacing: ${({ status }) => (status ? '.1rem' : '.2rem')};
    font-size: ${({ status }) => (status ? '.8rem' : '1rem')};
    margin-top: ${({ status }) => (status ? '4rem' : '0')};
    font-weight: ${({ status }) => (status ? 'normal' : '600')};
  }
`;
