import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  color: white;
  padding: 60px 20px;
  padding-top:100px;
`;

const IconBar = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

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
        <IconLink href="mailto:kumudha2920@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
          <FiMail />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/kumudhasri29" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/kumudha2029" title="GitHub" target="_blank" rel="noopener noreferrer">
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
