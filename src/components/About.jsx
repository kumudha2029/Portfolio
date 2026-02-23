import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb, SiStyledcomponents } from "react-icons/si";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Inter', 'Poppins', sans-serif;
    color: #f8fafc;
  }
`;

const AboutSection = styled.section`
  padding: 70px 20px;
  display: flex;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  max-width: 900px;
  padding: 40px;
  background: rgba(15, 23, 42, 0.75); /* overlay for readability */
  border-radius: 16px;
  backdrop-filter: blur(6px);
`;

const AboutHeading = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: #38bdf8;
`;

const AboutText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 14px;
  color: #e5e7eb;
`;

const ToolsHeading = styled.h3`
  margin-top: 32px;
  font-size: 1.6rem;
  color: #38bdf8;
`;

const ToolsIcons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  border: 1.5px solid #38bdf8;
  border-radius: 10px;
  padding: 18px;
  font-size: 2.6rem;
  color: #e5e7eb;
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(56, 189, 248, 0.15);
  }
`;

const About = () => {
  return (
    <>
      <GlobalStyle />

      <AboutSection>
        <AboutWrapper>
          <AboutHeading>About Me</AboutHeading>

          <AboutText>
            I’m Kumudhasri, a B.Tech Information Technology student at GTEC
            with a CGPA of 8.2. I focus on building practical, user-oriented
            applications using the MERN stack, Java, and Python.
          </AboutText>

          <AboutText>
            I have worked on real-world projects such as a GPS-based Attendance
            System, Library Management System, and a Symposium Website.
            Currently, I am improving these projects for academic reviews
            and internship opportunities.
          </AboutText>

          <ToolsHeading>Tools & Technologies</ToolsHeading>

          <ToolsIcons>
            <IconWrapper title="HTML"><FaHtml5 /></IconWrapper>
            <IconWrapper title="Styled Components"><SiStyledcomponents /></IconWrapper>
            <IconWrapper title="Java"><FaJava /></IconWrapper>
            <IconWrapper title="Python"><FaPython /></IconWrapper>
            <IconWrapper title="React"><FaReact /></IconWrapper>
            <IconWrapper title="Node.js"><FaNodeJs /></IconWrapper>
            <IconWrapper title="MongoDB"><SiMongodb /></IconWrapper>
            <IconWrapper title="GitHub"><FaGithub /></IconWrapper>
          </ToolsIcons>
        </AboutWrapper>
      </AboutSection>
    </>
  );
};

export default About;
