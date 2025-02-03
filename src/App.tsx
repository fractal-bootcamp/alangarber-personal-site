import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Body from "./components/Body/Body.tsx";
import Copy from "./components/Copy/Copy.tsx";
import TarotProject from "./components/TarotProject/TarotProject.tsx";
import Skills from "./components/Skills/Skills.tsx";
import OlderProjects from "./components/OlderProjects/OlderProjects.tsx";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Body />
        <Copy />
        <TarotProject />
        <Skills />
        <OlderProjects />
      </div>
    </>
  );
}

export default App;
