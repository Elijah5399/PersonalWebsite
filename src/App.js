import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
        <AboutPage />
        <Projects
          heading="Recent Projects"
          username="Elijah5399"
          length={6}
          specfic={[]}
        />
        <Skills
          heading={"My Skills"}
          hardSkills={[
            { name: "Python", value: 40 },
            { name: "SQL", value: 75 },
            { name: "Data Structures", value: 85 },
            { name: "C/C++", value: 40 },
            { name: "JavaScript", value: 75 },
            { name: "React", value: 65 },
            { name: "HTML/CSS", value: 80 },
            { name: "Java", value: 80 },
            { name: "PHP", value: 60 },
            { name: "Express.js", value: 80 },
          ]}
          softSkills={[
            { name: "Influencing Others", value: 88 },
            { name: "Active Listening", value: 76 },
            { name: "Self-Management", value: 92 },
            { name: "Problem Solving", value: 92 },
            { name: "Timing Management", value: 92 },
            { name: "Decision Making", value: 80 },
            { name: "Learning Agility", value: 90 },
            { name: "Goal Setting", value: 64 },
            { name: "Managing Change", value: 68 },
            { name: "Conflict Management", value: 92 },
          ]}
        />
      </main>
    </>
  );
}

export default App;
