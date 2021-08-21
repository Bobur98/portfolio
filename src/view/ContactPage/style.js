import styled from "styled-components";
import Img from "../../assets/imgs/contact.png";

export const Container = styled.div`
  background-image: linear-gradient(#63718365, #637183), url(${Img});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
`;

export const Wrapper = styled.div`
  margin: -15rem 0 15rem 0;
`;
