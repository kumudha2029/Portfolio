import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Pacifico', cursive;
    color: white;
  }
`;

const NavBarContainer = styled.nav`
  background-color: #1e1e2f;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding-left: 50px;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #00d8ff;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    background: #00d8ff;
    width: 0%;
    transition: width 0.3s ease-in-out;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <>
      <GlobalStyle />
      <NavBarContainer>
        <NavList>
          <NavItem><StyledLink to="/Home">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/About">About</StyledLink></NavItem>
          <NavItem><StyledLink to="/Projects">Projects</StyledLink></NavItem>
          <NavItem><StyledLink to="/Contact">Contact</StyledLink></NavItem>
        </NavList>
      </NavBarContainer>
    </>
  );
}

export default Navbar;
