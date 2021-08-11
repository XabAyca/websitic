import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import DarkMode from './components/DarkMode';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Works from './pages/Works';

const App = () => {
  const [darkMode, setDarkmode] = useState(false)

  return (
    <DarkMode.Provider value={{
      darkMode,
      toogleMode: () => {
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
