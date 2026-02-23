import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  padding: 70px 20px;
  color: #f8fafc;
`;

const Heading = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 40px;
  color: #38bdf8;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  background: #1e293b;
  padding: 26px;
  border-radius: 14px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #e5e7eb;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5f5;
  margin-bottom: 14px;
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 18px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 14px;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: #38bdf8;
  color: #020617;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #0ea5e9;
  }
`;

const projects = [
  {
    title: "Attendance System",
    description:
      "A MERN stack application that validates student attendance using real-time GPS location within a defined radius to prevent proxy attendance.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/kumudha2029/GPSATTENDANCE.git",
    live: "https://attendancesystembykumudha.netlify.app/"
  },
  {
    title: "Library Management System",
    description:
      "A web-based system to manage books, users, and issue/return records with role-based access for administrators and students.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/kumudha2029/Library-Management-System.git",
    live: "https://library-management-app-pied.vercel.app"
  },
  {
    title: "Symposium Website",
    description:
      "A responsive event management website that supports online registration, schedule viewing, and real-time updates for symposium coordination.",
    tech: "React.js, Node.js, Express.js, Google Sheets API",
    github: "https://github.com/kumudha2029/Symposium-Website.git",
    live: "https://symposium-kappa-six.vercel.app/"
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Heading>Projects</Heading>

      <CardGrid>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <TechStack>
              <strong>Tech Stack:</strong> {project.tech}
            </TechStack>

            <ButtonRow>
              <LinkButton href={project.github} target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href={project.live} target="_blank">
                <FaExternalLinkAlt /> Live
              </LinkButton>
            </ButtonRow>
          </Card>
        ))}
      </CardGrid>
    </ProjectsSection>
  );
};

export default Projects;
