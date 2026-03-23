import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ---------- ANIMATION ---------- */

const fadeUp = keyframes`  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

/* ---------- SECTION ---------- */

const ProjectsSection = styled.section`  padding: 10px 20px;
  max-width: 1200px;
  margin: auto;`;

const Heading = styled.h2`  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5rem;
  font-weight: 800;`;

/* ---------- GRID ---------- */

const CardGrid = styled.div`  display: grid;
  gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`;

/* ---------- CARD ---------- */

const Card = styled.div`
background: white;
border-radius: 18px;
overflow: hidden;
box-shadow: 0 10px 30px rgba(0,0,0,0.06);
cursor: pointer;
transition: 0.3s ease;
animation: ${fadeUp} 0.6s ease forwards;

&:hover {
transform: translateY(-8px);
}
`;

const ProjectImage = styled.img`  width: 100%;
  height: 190px;
  object-fit: cover;`;

const CardContent = styled.div`  padding: 25px;`;

const ProjectTitle = styled.h3`  margin: 0 0 12px;
  font-size: 1.3rem;
  font-weight: 700;`;

const ProjectDesc = styled.p`  color: #555;
  line-height: 1.6;`;

/* ---------- MODAL ---------- */

const Overlay = styled.div`  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 1000;`;

const Modal = styled.div`  background: white;
  border-radius: 18px;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  padding-bottom: 30px;
  animation: ${fadeUp} 0.4s ease forwards;`;

const ModalImage = styled.img`  width: 100%;
  max-height: 240px;
  object-fit: contain;
  background: #f5f5f5;`;

const ModalContent = styled.div`  padding: 30px;`;

const CloseBtn = styled.button`  position: absolute;
  right: 18px;
  top: 18px;
  border: none;
  background: #111;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;`;

const ButtonRow = styled.div`  display: flex;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;`;

const LinkButton = styled.a`
display: inline-flex;
align-items: center;
gap: 8px;
padding: 10px 18px;
background: #4f9cf9;
color: white;
border-radius: 10px;
text-decoration: none;
font-weight: 600;
transition: 0.3s;

&:hover {
background: #1f1f1f;
}
`;

/* ---------- PROJECT DATA ---------- */

const projects = [
{
title: "Golf Platform",
image: "/golf.png",
description:
"A full-stack golf platform with role-based access, authentication, and leaderboard system.",
tech: "React, Node.js, Express, Supabase",
role:
"Built complete full-stack app including frontend, backend, authentication, and deployment.",
challenges:
"Handled role-based authentication, API security, leaderboard logic, and deployment.",
features: [
"User authentication",
"Role-based access",
"Admin dashboard",
"Leaderboard system",
"Live deployed app"
],
admin: {
id: "[admin@gmail.com](mailto:admin@gmail.com)",
password: "admin123"
},
github: "https://github.com/kumudha2029/REVIEW-SYSTEM",
live: "https://golf-platform-five.vercel.app/"
},

{
title: "Attendance System",
image: "/attendance.png",
description:
"A MERN stack application designed to manage and validate student attendance efficiently.",
tech: "React, Node.js, Express, MongoDB",
role:
"Developed full MERN application with authentication and role-based system.",
challenges:
"Real-time attendance handling and secure authentication.",
features: [
"Student login",
"Teacher dashboard",
"Real-time updates",
"Role-based access"
],
github: "https://github.com/kumudha2029/GPSATTENDANCE.git",
live: "https://attendancesystembykumudha.netlify.app/"
},

{
title: "Library Management System",
image: "/library.png",
description:
"Full-stack system to manage books and users with code-based return validation.",
tech: "React, Node.js, Express, MongoDB",
role:
"Developed secure authentication and inventory management system.",
challenges:
"Code validation and role-based security.",
features: [
"Unique return code",
"Admin dashboard",
"Real-time updates"
],
github: "https://github.com/kumudha2029/Library-Management-System.git",
live: "https://library-management-app-pied.vercel.app"
},

{
title: "Symposium Website",
image: "/symposium.png",
description:
"A responsive event management website for online registration and schedule viewing.",
tech: "React, Node.js, Google Sheets API",
role:
"Designed frontend and integrated registration system with real-time data handling.",
challenges:
"Handling real-time form submissions and API integration with Google Sheets.",
features: [
"Online event registration",
"Schedule viewing",
"Live updates",
"Responsive UI"
],
github: "https://github.com/kumudha2029/Symposium-Website.git",
live: "https://symposium-kappa-six.vercel.app/"
}
];

/* ---------- COMPONENT ---------- */

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);

return ( <ProjectsSection> <Heading>Projects</Heading>

```
  <CardGrid>
    {projects.map((project, index) => (
      <Card key={index} onClick={() => setSelectedProject(project)}>
        <ProjectImage src={project.image} alt={project.title} />
        <CardContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDesc>
            {project.description.length > 90
              ? project.description.slice(0, 90) + "..."
              : project.description}
          </ProjectDesc>
        </CardContent>
      </Card>
    ))}
  </CardGrid>

  {selectedProject && (
    <Overlay onClick={() => setSelectedProject(null)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setSelectedProject(null)}>X</CloseBtn>

        <ModalImage
          src={selectedProject.image}
          alt={selectedProject.title}
        />

        <ModalContent>
          <h2>{selectedProject.title}</h2>

          <p>{selectedProject.description}</p>

          <p><strong>Tech Stack:</strong> {selectedProject.tech}</p>

          <p><strong>My Role:</strong> {selectedProject.role}</p>

          <p><strong>Challenges:</strong> {selectedProject.challenges}</p>

          {selectedProject.admin && (
            <>
              <p><strong>Admin Login:</strong></p>
              <p>Email: {selectedProject.admin.id}</p>
              <p>Password: {selectedProject.admin.password}</p>
            </>
          )}

          <strong>Key Features:</strong>
          <ul>
            {selectedProject.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <ButtonRow>
            <LinkButton href={selectedProject.github} target="_blank">
              <FaGithub /> GitHub
            </LinkButton>

            <LinkButton href={selectedProject.live} target="_blank">
              <FaExternalLinkAlt /> Live
            </LinkButton>
          </ButtonRow>
        </ModalContent>
      </Modal>
    </Overlay>
  )}
</ProjectsSection>


);
};

export default Projects;
