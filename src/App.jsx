import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import { Routes, Route } from "react-router-dom"
import "./App.css";
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Sobre-Mi" element={ <AboutMe /> } />
        <Route path="/Proyectos" element={ <Projects /> } />
      </Routes>
    </>
  );
}

export default App;
