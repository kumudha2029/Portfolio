import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiMail } from "react-icons/fi";
import { FaPhone, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import html2pdf from "html2pdf.js";

/* ===== Global Style ===== */

const GlobalStyle = createGlobalStyle`
  @page {
    size: A4;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: 'Inter', Arial, sans-serif;
  }

  /* Remove screen-only effects in PDF */
  @media print {
    body {
      background: #ffffff;
    }
  }
`;

/* ===== A4 Container ===== */

const Container = styled.div`
  width: 794px;       /* A4 width in px */
  height: 1123px;     /* A4 height in px */
  margin: 0 auto;     /* No vertical margin to avoid extra page */
  padding: 1.3rem 2rem;
  background: #ffffff;
  color: #000;
  box-sizing: border-box;
`;

/* ===== Header ===== */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
`;

const NameBlock = styled.div`
  text-align: left;
`;

const Name = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  letter-spacing: 1px;
`;

const SubHeader = styled.p`
  font-size: 1rem;
  margin-top: 0.3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #444;
`;

const ContactBlock = styled.div`
  text-align: right;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ContactLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const IconWrapper = styled.span`
  width: 18px;
  display: flex;
  justify-content: center;
`;

const ContactLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0077b5;
  }
`;

/* ===== Sections ===== */

const Section = styled.section`
  margin-top: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.15rem;
  margin-bottom: 0.4rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.45rem;
`;

/* ===== Education Row ===== */

const EduRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const EduRight = styled.span`
  font-size: 0.85rem;
  color: #555;
`;

/* ===== Main Component ===== */

const Resume = () => {

  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const options = {
      margin: 0,
      filename: "Kumudha_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      <GlobalStyle />

      <Container id="resume">

        {/* ===== Header ===== */}
        <Header>
          <NameBlock>
            <Name>KUMUDHASRI BALAJI</Name>
            <SubHeader>FULL STACK DEVELOPER</SubHeader>
          </NameBlock>

          <ContactBlock>
            <ContactLine>
              <IconWrapper><FiMail /></IconWrapper>
              <ContactLink href="mailto:kumudha2920@gmail.com">
                kumudha2920@gmail.com
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <IconWrapper><FaPhone /></IconWrapper>
              <ContactLink href="tel:+919597987710">
                +91 95979 87710
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <IconWrapper><FaLinkedin /></IconWrapper>
              <ContactLink href="https://linkedin.com/in/kumudhasri29" target="_blank" rel="noreferrer">
                linkedin.com/in/kumudhasri29
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <IconWrapper><FaGithub /></IconWrapper>
              <ContactLink href="https://github.com/kumudha2029" target="_blank" rel="noreferrer">
                github.com/kumudha2029
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <IconWrapper><FaGlobe /></IconWrapper>
              <ContactLink href="https://kumudhabalajiportfoliio.netlify.app/" target="_blank" rel="noreferrer">
                kumudhaportfolio.netlify.app
              </ContactLink>
            </ContactLine>
          </ContactBlock>
        </Header>

        {/* ===== Executive Summary ===== */}
        <Section>
          <SectionTitle>Executive Summary</SectionTitle>
          <p>
Full Stack Developer (Fresher) with hands-on experience in MERN stack, REST API development using Node.js & Express, and MongoDB integration. Comfortable working with React, JavaScript, and debugging UI issues. Experienced in building real-world applications and eager to contribute to data-driven products.
          </p>
        </Section>

        {/* ===== Education ===== */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem>
              <EduRow>
                <span>B.Tech Information Technology – GTEC, Vellore (CGPA: 8.2)</span>
                <EduRight>2022 – 2026</EduRight>
              </EduRow>
            </ListItem>

            <ListItem>
              <EduRow>
                <span>High School – GGHSS, Arni</span>
                <EduRight>2020 – 2022</EduRight>
              </EduRow>
            </ListItem>

            <ListItem>
              <EduRow>
                <span>10th – Sri Bharathi Vidhyashram, Arni</span>
                <EduRight>2019 – 2020</EduRight>
              </EduRow>
            </ListItem>
          </List>
        </Section>

        {/* ===== Skills ===== */}
        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <List>
            <ListItem><strong>Languages:</strong> Java, Python</ListItem>
            <ListItem><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</ListItem>
            <ListItem><strong>Backend:</strong> Node.js, REST API development,Spring Boot (Basic)</ListItem>
            <ListItem><strong>Database:</strong> MongoDB</ListItem>
            <ListItem><strong>Tools:</strong> Git, GitHub</ListItem>
          </List>
        </Section>

        {/* ===== Projects ===== */}
        <Section>
          <SectionTitle>Projects</SectionTitle>
          <List>
            <ListItem>
              <strong>GPS-Based Attendance System</strong>
              <ul>
                <li>Location-based attendance validation</li>
                <li>Authentication and real-time attendance flow</li>
              </ul>
            </ListItem>

            <ListItem>
              <strong>Library Management System</strong>
              <ul>
                <li>CRUD operations with DB integration</li>
              </ul>
            </ListItem>

            <ListItem>
              <strong>Symposium Website</strong>
              <ul>
                <li>Responsive event website</li>
              </ul>
            </ListItem>
          </List>
        </Section>

        {/* ===== Experience ===== */}
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <List>
            <ListItem>
              <strong>Full Stack Web Development Intern</strong><br />
              EDU TANTR Ventures Pvt. Ltd.<br />
              <em>30 Days Offline Internship – July 2025</em>
            </ListItem>
          </List>
        </Section>

        {/* ===== Certifications ===== */}
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <List>
            <ListItem><strong>Full Stack Web Development Internship</strong> – EDU TANTR – July 2025</ListItem>
            <ListItem><strong>Java Virtual Internship</strong> – Besant Technologies</ListItem>
            <ListItem><strong>Cloud Engineering</strong> – Google (Naan Mudhalvan)</ListItem>
            <ListItem><strong>Data Analytics</strong> – Google (Naan Mudhalvan)</ListItem>
          </List>
        </Section>

      </Container>

      {/* ===== Download Button ===== */}
      <div style={{ textAlign: "center", margin: "15px" }}>
        <button
          onClick={downloadPDF}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "8px 18px",
            fontSize: "1rem",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Download as PDF
        </button>
      </div>
    </>
  );
};

export default Resume;