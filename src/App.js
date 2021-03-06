import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import AllBeers from './components/AllBeers'
import BeerDetail from './components/BeerDetail'
import IronRest from './components/IronRest'

function App() {
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/RandomBeer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/NewBeer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/AllBeers" render={(props) => <AllBeers {...props} />} />
        <Route exact path="/allBeers/:id" render={(props) => <BeerDetail {...props} />} />
        <Route exact path="/iron-rest" render={(props) => <IronRest {...props} />} />
      </Switch>

    </div>
  );
}

export default App;
