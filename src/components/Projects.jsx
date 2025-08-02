import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  padding: 60px 20px;
  color: white;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-family: 'Pacifico', cursive;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  background-color: #1e1e2f;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 16px;
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  font-style: italic;
  margin-bottom: 16px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const LinkButton = styled.a`
  padding: 10px 14px;
  background-color: #00d8ff;
  border-radius: 8px;
  text-decoration: none;;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00aacc;
  }
`;

const projects = [
  {
    title: "GPS Attendance System",
    description: "Automated attendance tracking using GPS and radius-based validation.",
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/kumudha2029/GPSATTENDANCE.git",
    live: "https://gpsattendancesystem.netlify.app/"
  },
  {
    title: "Resume Builder",
    description: "Customizable resume builder with live preview and download options.",
    tech: "React, Styled Components",
    github: "https://github.com/kumudha2029/Resume-Builder.git",
    live: "https://resume-builder-demo.netlify.app"
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Heading>My Projects</Heading>
      <CardGrid>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <TechStack>Tech Stack: {project.tech}</TechStack>
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
