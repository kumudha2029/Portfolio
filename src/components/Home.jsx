import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const GlobalStyle = createGlobalStyle`
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

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px 50px 50px;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 0;
  padding-top: 100px;
`;

const Text = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid skyblue;
  width: 0;
  animation: typing 2s steps(20, end) forwards, blink 0.75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 18.5ch }
  }

  @keyframes blink {
    50% { border-color: transparent }
  }
`;

const StyledImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 20px;
`;

const ResumeButton = styled.button`
  background-color: #61aedeff;
  color: #fff;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #333c57;
  }
`;

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <FlexWrapper>
        <TextWrapper>
          <Title>Hello! I'm Kumudhasri</Title>
          <Text>A Passionate Developer</Text>
        </TextWrapper>
        <StyledImage src="/girllaptop.png" alt="Girl with Laptop" />
      </FlexWrapper>

      <CenteredButtonWrapper>
        <ResumeButton onClick={() => navigate('/Resume')}>
        View Resume <FaArrowRight />
      </ResumeButton>
      </CenteredButtonWrapper>
    </>
  );
}

export default Home;
