import React, { useContext } from 'react';
import DarkMode from '../components/DarkMode';
import Mouse from '../components/Mouse';
import Navbar from '../components/Navbar';

const Home = () => {
  const { darkMode } = useContext(DarkMode)
  
  return (
    <main className={darkMode?"home dark":"home"}>
      <Navbar />
      <Mouse/>
      <div className='home-content'>
        <h3>Confiez vos rêves à des experts du Web</h3>
        <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
        Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
      </div>
    </main>
  );
};

export default Home;