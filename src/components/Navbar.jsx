import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

/* ---------- NAV CONTAINER ---------- */

const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(16, 16, 16, 0.95);
  backdrop-filter: blur(8px);
  padding: 1.2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ---------- LOGO ---------- */

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #e7ecee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #101010;
  font-weight: bold;
  font-size: 1.2rem;
`;

const LogoText = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

/* ---------- NAV LIST ---------- */

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    background: #101010;
    flex-direction: column;
    width: 220px;
    padding: 30px;
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
  }
`;

const NavItem = styled.li``;

/* ---------- LINKS ---------- */

const ScrollLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    color: #61aede;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0%;
    background: #61aede;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const RouteLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
  transition: 0.3s ease;

  &.active {
    color: #61aede;
  }

  &:hover {
    color: #61aede;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0%;
    background: #61aede;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

/* ---------- MOBILE ICON ---------- */

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* ---------- COMPONENT ---------- */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContainer>
      <LogoWrapper>
        <LogoCircle>K</LogoCircle>
        <LogoText>Kumudhasri</LogoText>
      </LogoWrapper>

      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavList open={open}>
        <NavItem>
          <ScrollLink href="#home" onClick={() => setOpen(false)}>
            Home
          </ScrollLink>
        </NavItem>

        <NavItem>
          <ScrollLink href="#about" onClick={() => setOpen(false)}>
            About
          </ScrollLink>
        </NavItem>

        <NavItem>
          <ScrollLink href="#projects" onClick={() => setOpen(false)}>
            Projects
          </ScrollLink>
        </NavItem>

        <NavItem>
          <ScrollLink href="#certifications" onClick={() => setOpen(false)}>
            Certifications
          </ScrollLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
}

export default Navbar;