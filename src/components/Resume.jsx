import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { FaPhone, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import html2pdf from "html2pdf.js";

/* ===== A4 Container ===== */

const Container = styled.div`
  width: 794px;
  min-height: 1123px;
  margin: 40px auto;
  padding: 1.4rem 2rem;
  background: #ffffff;
  color: #000;
  box-sizing: border-box;
  font-family: "Inter", Arial, sans-serif;
`;

/* ===== Header ===== */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.1rem;
  margin: 0;
  letter-spacing: 1px;
`;

const SubHeader = styled.p`
  font-size: 0.95rem;
  margin-top: 0.3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #444;
`;

const ContactBlock = styled.div`
  text-align: right;
  font-size: 0.85rem;
  line-height: 1.6;
`;

const ContactLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
`;

/* ===== Sections ===== */

const Section = styled.section`
  margin-top: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.2rem;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const EduRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

/* ===== Download Button ===== */

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 30px 0 60px;
`;

const DownloadButton = styled.button`
  background: #111;
  color: #fff;
  border: none;
  padding: 10px 22px;
  font-size: 0.95rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #4f9cf9;
  }
`;

/* ===== Component ===== */

const Resume = () => {

  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const options = {
      margin: 0,
      filename: "Kumudhasri_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      <Container id="resume">

        <Header>
          <div>
            <Name>KUMUDHASRI BALAJI</Name>
            <SubHeader>FULL STACK DEVELOPER</SubHeader>
          </div>

          <ContactBlock>
            <ContactLine>
              <FiMail /> 
              <ContactLink href="mailto:kumudha2920@gmail.com">
                kumudha2920@gmail.com
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaPhone />
              <ContactLink href="tel:+919597987710">
                +91 95979 87710
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaLinkedin />
              <ContactLink href="https://linkedin.com/in/kumudhasri29">
                linkedin.com/in/kumudhasri29
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaGithub />
              <ContactLink href="https://github.com/kumudha2029">
                github.com/kumudha2029
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaGlobe />
              <ContactLink href="https://kumudhabalajiportfoliio.netlify.app/">
                kumudhaportfolio.netlify.app
              </ContactLink>
            </ContactLine>
          </ContactBlock>
        </Header>

        <Section>
          <SectionTitle>Executive Summary</SectionTitle>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
            Full Stack Developer (Fresher) with hands-on experience in MERN stack,
            REST API development using Node.js & Express, and MongoDB integration.
            Comfortable working with React and JavaScript. Experienced in building
            real-world applications and eager to contribute to data-driven products.
          </p>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem>
              <EduRow>
                <span>B.Tech IT – GTEC, Vellore (CGPA: 8.2)</span>
                <span>2022 – 2026</span>
              </EduRow>
            </ListItem>
            <ListItem>
              <EduRow>
                <span>High School – GGHSS, Arni</span>
                <span>2020 – 2022</span>
              </EduRow>
            </ListItem>
            <ListItem>
              <EduRow>
                <span>10th – Sri Bharathi Vidhyashram, Arni</span>
                <span>2019 – 2020</span>
              </EduRow>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <List>
            <ListItem><strong>Languages:</strong> Java, Python</ListItem>
            <ListItem><strong>Frontend:</strong> HTML, CSS, JavaScript, React</ListItem>
            <ListItem><strong>Backend:</strong> Node.js, REST APIs, Spring Boot (Basic)</ListItem>
            <ListItem><strong>Database:</strong> MongoDB</ListItem>
            <ListItem><strong>Tools:</strong> Git, GitHub</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <List>
            <ListItem>
              <strong>GPS-Based Attendance System</strong> – Location-based attendance validation with authentication.
            </ListItem>
            <ListItem>
              <strong>Library Management System</strong> – CRUD operations with database integration.
            </ListItem>
            <ListItem>
              <strong>Symposium Website</strong> – Responsive event management website.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <List>
            <ListItem>
              <strong>Full Stack Web Development Intern</strong> – EDU TANTR Ventures Pvt. Ltd.
              <br />
              <em>30 Days Offline Internship – July 2025</em>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <List>
            <ListItem>Full Stack Web Development Internship – EDU TANTR (July 2025)</ListItem>
            <ListItem>Java Virtual Internship – Besant Technologies</ListItem>
            <ListItem>Cloud Engineering – Google (Naan Mudhalvan)</ListItem>
            <ListItem>Data Analytics – Google (Naan Mudhalvan)</ListItem>
          </List>
        </Section>

      </Container>

      <ButtonWrapper>
        <DownloadButton onClick={downloadPDF}>
          Download as PDF
        </DownloadButton>
      </ButtonWrapper>
    </>
  );
};

export default Resume;