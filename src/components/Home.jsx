import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/* ---------- ANIMATIONS ---------- */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

/* ---------- HERO ---------- */

const Hero = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 80px 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 60px;
    padding: 60px 20px;
  }
`;

const Left = styled.div`
  max-width: 540px;
`;
const typing = keyframes`
  from { max-width: 0 }
  to { max-width: 18ch }
`;

const blink = keyframes`
  0%, 100% { border-color: transparent; }
  50% { border-color: #4f9cf9; }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  line-height: 1.1;

  display: inline-block;
  white-space: nowrap;
  overflow: hidden;

  border-right: 3px solid #4f9cf9;

  max-width: 0;
  animation:
    ${typing} 2s steps(18, end) forwards,
    ${blink} 0.8s step-end infinite;
`;
const RoleBadge = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  margin-top: 18px;
  color: #111;
  animation: ${fadeUp} 1s ease forwards;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-top: 22px;
  color: #333;
  animation: ${fadeUp} 1.2s ease forwards;
`;

/* ---------- BUTTONS ---------- */

const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 35px;
  animation: ${fadeUp} 1.4s ease forwards;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.button`
  padding: 14px 34px;
  border-radius: 50px;
  border: none;
  background: #1f1f1f;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #4f9cf9;
    transform: translateY(-4px);
  }
`;

const OutlineButton = styled.button`
  padding: 14px 34px;
  border-radius: 50px;
  border-radius: 50px;
  border: 2px solid #1f1f1f;
  background: transparent;
  color: #1f1f1f;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #1f1f1f;
    color: white;
    transform: translateY(-4px);
  }
`;

/* ---------- CONTACT ICONS ---------- */

const ContactIcons = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 25px;
  animation: ${fadeUp} 1.6s ease forwards;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const IconLink = styled.a`
  font-size: 1.9rem;
  color: #1f1f1f;
  transition: 0.3s ease;

  &:hover {
    color: #4f9cf9;
    transform: translateY(-4px) scale(1.05);
  }
`;

/* ---------- IMAGE ---------- */

const ImageWrapper = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
  border: 12px solid white;
  box-shadow: 0 25px 70px rgba(0,0,0,0.15);
  animation:
    ${fadeInScale} 1.2s ease forwards,
    ${float} 2s ease-in-out infinite;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ---------- COMPONENT ---------- */

function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Hero>
      <Left>
        <Name>Hi, I'm Kumudhasri</Name>

        <RoleBadge>Full Stack Developer</RoleBadge>

        <Description>
          I build modern web applications using MERN stack and Java.
          I focus on clean design, performance, and solving real-world problems.
        </Description>

        <ButtonGroup>
          <PrimaryButton onClick={() => scrollToSection("projects")}>
            View Projects
          </PrimaryButton>

          <OutlineButton onClick={() => navigate("/resume")}>
            View Resume
          </OutlineButton>
        </ButtonGroup>

        <ContactIcons>
          <IconLink href="mailto:kumudha2920@gmail.com" aria-label="Email">
            <FiMail />
          </IconLink>

          <IconLink
            href="https://www.linkedin.com/in/kumudhasribalaji/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </IconLink>

          <IconLink
            href="https://github.com/kumudha2029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </IconLink>
        </ContactIcons>
      </Left>

      <ImageWrapper>
        <ProfileImage src="/girllaptop.png" alt="Kumudhasri profile" />
      </ImageWrapper>
    </Hero>
  );
}

export default Home;