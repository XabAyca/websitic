import React, { useContext } from 'react';
import DarkMode from '../components/DarkMode';
import Navbar from '../components/Navbar';
import StudyCaseNavbar from '../components/StudyCaseNavbar';

const Works = () => {
  const {darkMode} = useContext(DarkMode)
  return (
    <main className={darkMode?"works dark":"works"}>
      <Navbar/>
      <div className="works-content">
        <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
        <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      </div>
      <StudyCaseNavbar/>
    </main>
  );
};

export default Works;