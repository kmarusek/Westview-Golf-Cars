import React from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage'
import './components/static/style/global.scss'


const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  </BrowserRouter>
}

export default App;
