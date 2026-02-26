import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

/* ---------- GLOBAL STYLE (ONLY HERE) ---------- */

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background: #f7efe5;   /* Cream background everywhere */
    color: #2b2b2b;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;