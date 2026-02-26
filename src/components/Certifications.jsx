import React from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

/* ---------- ANIMATION ---------- */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: auto;
  animation: ${fadeUp} 0.8s ease forwards;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 70px;
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

/* ---------- CARD ---------- */

const Card = styled.div`
  width: 320px;
  background: white;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 25px;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-weight: 700;
`;

const Org = styled.p`
  margin: 0 0 20px;
  color: #555;
  font-size: 0.95rem;
`;

const ViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #1f1f1f;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s ease;

  &:hover {
    background: #4f9cf9;
    transform: translateY(-2px);
  }
`;

/* ---------- COMPONENT ---------- */

function Certificates() {
  return (
    <Section>
      <Heading>Certificates</Heading>

      <Grid>

        {/* EduTantr Certificate */}
        <Card>
          <Image src="/EduTantr.png" alt="EduTantr Certificate" />
          <Content>
            <Title>Full Stack Web Development Internship</Title>
            <Org>EDU TANTR Ventures Pvt. Ltd. – July 2025</Org>

            <ViewButton href="/EduTantr.pdf" target="_blank" rel="noopener noreferrer">
              View Certificate <FaExternalLinkAlt />
            </ViewButton>
          </Content>
        </Card>

        {/* Java Internship */}
        <Card>
          <Image src="/Beasant.png" alt="Java Internship Certificate" />
          <Content>
            <Title>Java Virtual Internship</Title>
            <Org>Besant Technologies</Org>

            <ViewButton href="/Beasant.png" target="_blank" rel="noopener noreferrer">
              View Certificate <FaExternalLinkAlt />
            </ViewButton>
          </Content>
        </Card>

      </Grid>
    </Section>
  );
}

export default Certificates;