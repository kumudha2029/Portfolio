import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

// Container for the whole section
const ContactContainer = styled.div`
  text-align: center;
  color: white;
  padding: 60px 20px;
  padding-top:100px;
`;

// Icon row
const IconBar = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

// Individual icon styling
const IconLink = styled.a`
  color: white;
  font-size: 2rem;
  padding: 12px;
  border: 2px solid #00d8ff;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: #e0faff;
    color: #1e1e2f;
  }
`;

const Address = styled.div`
  font-size: 1rem;
  color: #f0f0f0;
  line-height: 1.8;
`;

const ContactInfo = () => {
  return (
    <ContactContainer>
      <IconBar>
        <IconLink href="mailto:kumudha@example.com" title="Email" target="_blank">
          <FiMail />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/your-linkedin-id" title="LinkedIn" target="_blank">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/your-github-id" title="GitHub" target="_blank">
          <FaGithub />
        </IconLink>
      </IconBar>

      <Address>
        <strong>Address:</strong><br />
        14/3,chettithangal<br />
        tiruvannamalai,arni-632314<br />
        India
      </Address>
    </ContactContainer>
  );
};

export default ContactInfo;
