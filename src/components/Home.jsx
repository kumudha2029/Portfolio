import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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
  border-right: 2px solid #00d8ff;
  width: 0;
  animation: typing 4s steps(10, end) forwards, blink 0.75s step-end infinite;

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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

function Home() {
  return (
    <FlexWrapper>
      <TextWrapper>
        <Title>Hello! I'm Kumudhasri</Title>
        <Text>A Passionate Developer</Text>
      </TextWrapper>
      <StyledImage src="/girllaptop.png" alt="Girl with Laptop" />
    </FlexWrapper>
  );
}

export default Home;
