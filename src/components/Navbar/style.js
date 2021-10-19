import styled from "styled-components";
import Img from "../../assets/imgs/myimage.png";
import { Link } from "react-router-dom";
import { Link as RLink } from "react-scroll";

export const Container = styled.div`
  display: flex;
  box-shadow: 0 1px 30px #637183;
  background: #637183;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  /* z-index: 999; */
  background-image: linear-gradient(
      to right,
      #818fa1 45%,
      #818fa194 100%,
      #818fa19d 1%
    ),
    url(${Img});
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 414px) {
    width: 100%;
    background-image: unset;
  }
`;

export const NavContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 414px) {
    width: 100%;
    background-image: unset;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #818fa1;
    justify-content: center;
  }
`;

export const NavLink = styled(RLink)`
  text-decoration: none;
  display: flex;
  margin: 1.5rem 0 1.5rem 30px;
  align-items: center;
  color: #fcfbf869;
  height: 100%;
  &:hover {
    /* color: #f8f3f1; */
    color: var(--color-green);
  }
  cursor: pointer;
  @media (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    /* display: table; */
    justify-content: center;
    align-items: center;
  }
`;
export const Wrapper = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  position: absolute;
  left: 30%;
  @media (max-width: 960px) {
    margin: 1rem 2rem 1rem 4rem;
    justify-self: flex-start;
    display: flex;
    left: 0;
    top: 0;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
