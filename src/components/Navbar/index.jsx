import React, { useState } from "react";
import {
  Container,
  NavContainer,
  MobileIcon,
  Wrapper,
  NavLink,
  NavMenu,
  NavItem,
} from "./style";
import Logo from "../Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Container>
        <Wrapper to="/home" onClick={closeMobileMenu}>
          {" "}
          <Logo />
        </Wrapper>
        <NavContainer>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/resume">resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/portfolio">portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">contact</NavLink>
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavContainer>
      </Container>
    </IconContext.Provider>
  );
}
