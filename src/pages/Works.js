import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardMode from '../components/CardMode';
import CardModeBtn from '../components/CardModeBtn';
import DarkMode from '../components/DarkMode';
import Navbar from '../components/Navbar';
import StudyCase from '../components/StudyCase';
import StudyCaseNavbar from '../components/StudyCaseNavbar';

const Works = () => {
  const { darkMode } = useContext(DarkMode)
  const { project } = useParams();
  const [cardMode, setCardMode] = useState(false)
  
  useEffect(() => {
    const isCardMode = JSON.parse(localStorage.getItem('cardMode'));

    if (isCardMode !== null && isCardMode !== undefined) {
      setCardMode(isCardMode)
    }
  },[])

  return (
    <CardMode.Provider value={{
      cardMode,
      toogleMode: () => {
        localStorage.setItem('cardMode', String(!cardMode));
        setCardMode(!cardMode)
      }
    }}>
      <main className={darkMode ? "works dark" : "works"}>
        <CardModeBtn/>
        <Navbar />
        <div className="works-content">
          <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
          <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        </div>
        <StudyCaseNavbar />
        {project && <StudyCase/>}
      </main>
    </CardMode.Provider>
  );
};

export default Works;