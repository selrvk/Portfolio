import AboutMe from './sections/AboutMe.jsx';
import Footer from './sections/Footer.jsx';
import Header from './sections/Header.jsx'
import MainHero from './sections/MainHero.jsx';
import ProjectsContainer from './sections/ProjectsContainer.jsx';
import Skills from './sections/Skills.jsx';
import './index.css';
import Contact from './sections/Contact.jsx';

function App() {
  
  return (
    
    <>
      <Header/>
      <MainHero/>
      <ProjectsContainer/>
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App


