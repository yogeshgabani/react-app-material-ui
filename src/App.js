import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Main_content from './Component/Main-content/Main_content';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';  
import ScrollToTop from "react-scroll-to-top";



function App() {

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const [showNav, setShowNav] = useState(false);

  const addClass = () => {
    setShowNav(!showNav);
  };


  //progress-top-bar scroll indicator

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollDistance = documentHeight - windowHeight;
    const currentScrollPercentage = (scrollTop / scrollDistance) * 100;
    setScrollPercentage(currentScrollPercentage);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
    };
  }, []);

 
    
 
  return (

    <div className="App bg-gradient" id="fullscreen">
       <div className="scroll-indicator-container">
      <div className="scroll-indicator" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
      <Box  className={showNav ? 'position-relative show-header ' : 'position-relative Show-nav'}>
      <MenuIcon className={showNav ? "icon-hover menu-icon-one  hide-menu text-shadow" : "menu-icon-one icon-hover text-shadow show-nav "} onClick={addClass} />
        <Header />
      </Box>
      <Box  className={showNav ? ' show-sidebar' : 'Show-nav '}>
        <Sidebar />
      </Box>
      <Box  className={showNav ? ' show-maincontent' : 'Show-nav '}>
        <Main_content />
      </Box>

      
      <ScrollToTop smooth color="#6f00ff" />
    </div>
  );
}

export default App;
