
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/main"
import AboutMe from "./components/aboutme"
import Skills from './components/skills';
import Experience from './components/experience';
import Work from './components/work';

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Work/>
    
    </div>
  );
}

export default App;
