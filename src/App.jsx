import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import FadeInSection from "./components/FadeInSection";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background: #f7efe5;
    color: #2b2b2b;
  }

  * {
    box-sizing: border-box;
  }

  #about,
  #projects,
  #certifications {
    padding: 120px 0;
  }
`;

function MainPage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <FadeInSection>
          <About />
        </FadeInSection>
      </section>

      <section id="projects">
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </section>

      <section id="certifications">
        <FadeInSection>
          <Certifications />
        </FadeInSection>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;