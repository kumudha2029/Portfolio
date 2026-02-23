import React from "react";
import styled, { createGlobalStyle } from "styled-components";

/* ---------- GLOBAL ---------- */

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background: #f7efe5;
    color: #333;
  }
`;


const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  max-width: 400px;
`;



const Name = styled.h1`
  font-size: 3.5rem;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
`;

const RoleBadge = styled.div`
  display: inline-block;
  border: 2px solid #0f0d0d;
  padding: 12px 25px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 1.2rem;
`;

/* ---------- BUTTON ---------- */

const Button = styled.button`
  margin-top: 30px;
  padding: 14px 30px;
  border-radius: 25px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
`;

/* ---------- RIGHT IMAGE ---------- */

const ImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid white;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ---------- COMPONENT ---------- */

function Home() {
  return (
    <>
      <GlobalStyle />


      <Hero>
        <Left>

          <Name>Kumudhasri</Name>

          <Description>
            Passionate developer building modern web applications
            using MERN stack and Java. I love solving real-world problems.
          </Description>

          <RoleBadge>Full Stack Developer</RoleBadge>

          <br />
          <Button>View Projects</Button>
        </Left>

        <ImageWrapper>
          <ProfileImage src="/girllaptop.png" alt="profile" />
        </ImageWrapper>
      </Hero>
    </>
  );
}

export default Home;