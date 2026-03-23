import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaPhone, FaGithub, FaLinkedin, FaGlobe, FaArrowLeft } from "react-icons/fa";
import html2pdf from "html2pdf.js";

/* ===== A4 Container ===== */

const Container = styled.div`
  width: 794px;
  margin: 0 auto;
  padding: 1.2rem 1.6rem;
  background: #ffffff;
  color: #000;
  box-sizing: border-box;
  font-family: "Inter", Arial, sans-serif;
  margin-top: 50px;
`;

/* ===== Header ===== */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin: 0;
  letter-spacing: 1px;
`;

const SubHeader = styled.p`
  font-size: 0.9rem;
  margin-top: 0.3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #444;
`;

/* ===== Contact Section ===== */

const ContactBlock = styled.div`
  display: grid;
  gap: 0.4rem;
  font-size: 0.85rem;

  svg {
    font-size: 0.85rem;
  }
`;

const ContactLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
`;

/* ===== Sections ===== */

const Section = styled.section`
  margin-top: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.95rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.2rem;
  margin-bottom: 0.4rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.45rem;
  font-size: 0.88rem;
  line-height: 1.4;
`;

const EduRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
`;

/* ===== Buttons ===== */

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0 60px;
`;

const DownloadButton = styled.button`
  background: #111;
  color: #fff;
  border: none;
  padding: 10px 22px;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #4f9cf9;
  }
`;

const BackButton = styled.button`
  background: transparent;
  color: #111;
  border: 2px solid #111;
  padding: 10px 22px;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #111;
    color: #fff;
  }
`;

/* ===== Component ===== */

const Resume = () => {

  const navigate = useNavigate();

  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const options = {
      margin: 0,
      filename: "Kumudhasri_Resume.pdf",

      image: {
        type: "jpeg",
        quality: 0.7
      },

      html2canvas: {
        scale: 1.5,
        useCORS: true,
        letterRendering: true,
        scrollY: 0
      },

      jsPDF: {
        unit: "pt",
        format: "a4",
        orientation: "portrait"
      }
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
              <ContactLink
                href="https://www.linkedin.com/in/kumudhasribalaji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kumudhasribalaji
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaGithub />
              <ContactLink
                href="https://github.com/kumudha2029"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kumudha2029
              </ContactLink>
            </ContactLine>

            <ContactLine>
              <FaGlobe />
              <ContactLink
                href="https://portfolio-kumudhasris-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                kumudhaportfolio.app
              </ContactLink>
            </ContactLine>
          </ContactBlock>
        </Header>

        {/* Executive Summary */}

        <Section>
          <SectionTitle>Executive Summary</SectionTitle>
          <p style={{ fontSize: "0.88rem", lineHeight: "1.4" }}>
            Full Stack Developer (Fresher) with hands-on experience in MERN stack,
            REST API development using Node.js & Express, and MongoDB integration.
            Strong foundation in Java and Python. Passionate about building
            scalable and efficient web applications.
          </p>
        </Section>

        {/* Education */}

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

        {/* Skills */}

        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <List>
            <ListItem><strong>Languages:</strong> Java, Python, JavaScript</ListItem>
            <ListItem><strong>Frontend:</strong> HTML, CSS, React</ListItem>
            <ListItem><strong>Backend:</strong> Node.js, Express.js, REST APIs</ListItem>
            <ListItem><strong>Database:</strong> MongoDB, MySQL</ListItem>
            <ListItem><strong>Tools:</strong> Git, GitHub</ListItem>
          </List>
        </Section>

        {/* Projects */}

       <Section>
  <SectionTitle>Projects</SectionTitle>
  <List>

    <ListItem>
      <strong>Automated Attendance System</strong><br/>
      Developed a full-stack attendance management application using MERN stack with secure authentication and role-based access control.
      Designed REST APIs and integrated MongoDB for real-time attendance tracking and efficient data management.
    </ListItem>

    <ListItem>
      <strong>Library Management System</strong><br/>
      Built a web-based CRUD application with role-based login to manage book issue, return, and search functionalities.
      Implemented backend logic and database integration to ensure accurate record maintenance and smooth user interaction.
    </ListItem>

    <ListItem>
      <strong>Symposium Event Management Website</strong><br/>
      Created a responsive event registration platform using React with dynamic form handling and validation features.
      Developed reusable UI components and optimized user experience for seamless event participation.
    </ListItem>

  </List>
</Section>

        {/* Experience */}

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <List>
            <ListItem>
              <strong>Full Stack Web Development Intern</strong> – EDU TANTR Ventures Pvt. Ltd. –
              July 2025<br/> Worked on frontend UI, backend API integration,
              and assisted in deployment processes.
            </ListItem>
          </List>
        </Section>

        {/* Certifications */}

        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <List>
            <ListItem>Full Stack Web Development Internship – EDU TANTR</ListItem>
            <ListItem>Java Virtual Internship – Besant Technologies</ListItem>
            <ListItem>Cloud Engineering – Google (Naan Mudhalvan)</ListItem>
            <ListItem>Data Analytics – Google (Naan Mudhalvan)</ListItem>
          </List>
        </Section>

      </Container>

      <ButtonWrapper>

        <BackButton onClick={() => navigate("/")}>
          <FaArrowLeft />
          Back
        </BackButton>

        <DownloadButton onClick={downloadPDF}>
          Download as PDF
        </DownloadButton>

      </ButtonWrapper>
    </>
  );
};

export default Resume;