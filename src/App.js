import React from 'react';
import { Header, Planets, Planet, Breadcrumbs } from 'components';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container-wrapper">
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route path='/planets/:id' component={Planet}/>
        <Route path='/planets/' component={Planets}/>
        <Redirect from='/' to='/planets'/>
      </Switch>
    </div>
  );
}

export default App;
