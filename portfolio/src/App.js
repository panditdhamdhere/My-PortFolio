// import logo from './logo.svg';
// import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SocialLinks />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
