import NavBar from './components/NavBar.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import './App.css';

const App = () => {
  return (
  <>
    <NavBar />
    <Home />
    <AboutMe />
    <Projects />
  </>
  );
}
export default App;