import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiMail } from "react-icons/fi";
import { FaPhone, FaCheck, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const GlobalStyle = createGlobalStyle`
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    body {
      margin: 0;
      box-shadow: none;
    }

    .hide-on-print {
      display: none;
    }
  }

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

const Container = styled.div`
  width: 794px;
  height: 1123px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  background: #ffffff;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: hidden;
  color: black;
`;

const Header = styled.header`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const SubHeader = styled.div`
  color: #555;
  font-size: 0.95rem;
`;

const ContactRow = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: skyblue;
  gap: 0.3rem;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: skyblue;
  }
`;

const Section = styled.section`
  margin-top: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #222;
  border-bottom: 2px solid black;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
`;

const DownloadButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const Resume = () => {
  const downloadCodeAsPDF = () => {
    const element = document.getElementById("code-to-download");

    const opt = {
      margin: 0,
      filename: "kumudhas_resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all"] }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <GlobalStyle />
      <Container id="code-to-download">
        <Header>
          <Name>KUMUDHASRI BALAJI</Name>
          <SubHeader>Full Stack Developer | Vellore, India</SubHeader>
          <ContactRow>
            <IconLink href="mailto:kumudha2920@gmail.com" title="Email" target="_blank">
              <FiMail /> kumudha2920@gmail.com
            </IconLink>
            <IconLink href="tel:+919597987710" title="Phone">
              <FaPhone /> +91 9597987710
            </IconLink>
          </ContactRow>
          <ContactRow>
            <IconLink href="https://github.com/kumudha2029" target="_blank">
              <FaGithub /> GitHub
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/kumudhasri29" target="_blank">
              <FaLinkedin /> LinkedIn
            </IconLink>
            <IconLink href="https://kumudhaportfolio.netlify.app/" target="_blank">
              <FaGlobe /> Portfolio
            </IconLink>
          </ContactRow>
        </Header>

        <Section>
          <SectionTitle>Executive Summary</SectionTitle>
          <div>
            Full Stack Developer with strong skills in Java, ReactJS, Node.js, and MongoDB.<br />
            B.Tech IT student (CGPA 8.2) with solid problem-solving and teamwork abilities.<br />
            Eager to build impactful web applications and grow in dynamic tech environments.
          </div>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem>B.Tech in Information Technology, GTEC (Vellore) – CGPA: 8.2</ListItem>
            <ListItem>High School, GGHSS (Arni) – CGPA: 6.2</ListItem>
            <ListItem>10th Standard, Sri Bharathi Vidhyashram (Arni) – CGPA: 9.2</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <List>
            <ListItem><strong>Languages:</strong> Java</ListItem>
            <ListItem><strong>Web:</strong> HTML, CSS, JS, Node.js</ListItem>
            <ListItem><strong>Frameworks:</strong> React.js, Spring Boot</ListItem>
            <ListItem><strong>Databases:</strong> MongoDB</ListItem>
            <ListItem><strong>Tools:</strong> Git</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Soft Skills</SectionTitle>
          <List>
            <ListItem><FaCheck /> Communication</ListItem>
            <ListItem><FaCheck /> Problem-solving</ListItem>
            <ListItem><FaCheck /> Leadership</ListItem>
            <ListItem><FaCheck /> Teamwork</ListItem>
            <ListItem><FaCheck /> Time Management</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <List>
            <ListItem>Google Cloud</ListItem>
            <ListItem>Certificate in computer operating system – BU-CII Programme</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <List>
            <ListItem><strong>GPS-based Attendance System</strong> – React, Node.js, MongoDB</ListItem>
            <ListItem><strong>Resume Builder</strong> – React, Node.js, MongoDB</ListItem>
          </List>
        </Section>
      </Container>

      <div style={{ textAlign: "center", marginTop: "1rem" }} className="hide-on-print">
        <DownloadButton onClick={downloadCodeAsPDF}>Download as PDF</DownloadButton>
      </div>
    </>
  );
};

export default Resume;
