import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb, SiStyledcomponents } from "react-icons/si";
import styled, { keyframes } from "styled-components";

/* ---------- ANIMATION ---------- */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ---------- SECTION ---------- */

const AboutSection = styled.section`
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  max-width: 900px;
  padding: 4px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  animation: ${fadeUp} 0.8s ease forwards;

  @media (max-width: 768px) {
    padding: 35px;
  }
`;

/* ---------- TEXT ---------- */

const AboutHeading = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 800;
`;

const AboutText = styled.p`
  font-size: 1.08rem;
  line-height: 1.9;
  margin-bottom: 18px;
  color: #555;
  text-align: center;
`;

/* ---------- TOOLS ---------- */

const ToolsHeading = styled.h3`
  margin-top: 50px;
  font-size: 1.7rem;
  text-align: center;
  font-weight: 700;
`;

const ToolsIcons = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 22px;
`;

const IconWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 22px;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    background: #4f9cf9;
    color: white;
  }
`;

/* ---------- COMPONENT ---------- */

const About = () => {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutHeading>About Me</AboutHeading>

        <AboutText>
          I'm Kumudhasri, a B.Tech Information Technology student with a CGPA of 8.2.
          I build practical web applications using the MERN stack, Java, and Python.
        </AboutText>

        <AboutText>
          My projects include a GPS-based Attendance System, Library Management System,
          and Symposium Website. Currently, I'm refining these projects for academic
          reviews and internship opportunities.
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
  );
};

export default About;