import React, { useState } from 'react';
import {
  Container,
  NavContainer,
  MobileIcon,
  Wrapper,
  NavLink,
  NavMenu,
} from './style';
import Logo from '../Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Container>
        <Wrapper onClick={closeMobileMenu}>
          {' '}
          <Logo to="/home" />
        </Wrapper>
        <NavContainer>
          <NavMenu onClick={handleClick} click={click}>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                activeClass="active"
                to="/home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/resume"
              >
                resume
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavContainer>
      </Container>
    </IconContext.Provider>
  );
}
