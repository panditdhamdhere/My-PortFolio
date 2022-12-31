// import logo from './logo.svg';
// import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
