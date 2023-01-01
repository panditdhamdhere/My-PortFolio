// import logo from './logo.svg';
// import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SocialLinks />
      <TechStack />
    </div>
  );
}

export default App;
