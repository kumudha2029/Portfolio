import React from "react";
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
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

const AboutSection = styled.section`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

const AboutWrapper = styled.div`
  max-width: 900px;
  text-align: left;
  padding: 40px;
  `;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  color:white;
  margin-bottom: 20px;
  font-family: 'Pacifico', cursive;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: white;
  line-height: 1.8;
  margin-bottom: 16px;
`;

const ToolsHeading = styled.h3`
  margin-top: 30px;
  font-size: 1.8rem;
  color: white;
`;

const ToolsIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  border: 2px solid #00d8ff;
  border-radius: 12px;
  padding: 20px;
  font-size: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #e0faff;
  }
`;

// JSX Component
const About = () => {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutHeading>About Me</AboutHeading>
        <AboutText>
          I'm Kumudha, a B.Tech IT student at GTEC with a CGPA of 8.2, passionate about MERN stack, Java, and Python for building smart, user-focused solutions.
        </AboutText>
        <AboutText>
          I've developed real-world projects like a GPS-based attendance system and a multilingual chatbot, and I actively mentor peers and contribute to tech events.
        </AboutText>

        <ToolsHeading>Tools & Technologies</ToolsHeading>
        <ToolsIcons>
          <IconWrapper title="React"><FaReact /></IconWrapper>
          <IconWrapper title="Node.js"><FaNodeJs /></IconWrapper>
          <IconWrapper title="MongoDB"><SiMongodb /></IconWrapper>
          <IconWrapper title="GitHub"><FaGithub /></IconWrapper>
        </ToolsIcons>
      </AboutWrapper>
    </AboutSection>
  );
};

export default About;
