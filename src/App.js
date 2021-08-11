import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import DarkMode from './components/DarkMode';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Works from './pages/Works';

const App = () => {
  const [darkMode, setDarkmode] = useState(false)

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("themePreference"))
    if (isDark !== undefined && isDark !== null) {
      setDarkmode(isDark)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkmode(true)
    }
  },[])

  return (
    <DarkMode.Provider value={{
      darkMode,
      toogleMode: () => {
        localStorage.setItem("themePreference",String(!darkMode))
        setDarkmode(!darkMode)
      }
    }}
    >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/works' component={Works}/>
        <Route path='/works/:project' component={Works}/>
        <Route path='/' component={NotFound}/>
      </Switch>
    </DarkMode.Provider>
  );
};

export default App;
