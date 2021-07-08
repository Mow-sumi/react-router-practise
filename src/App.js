import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home from './components/Users/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import UserDetail from './components/UserDetail/UserDetail';


function App() {
  
  return (
  <Router>
    <Switch>
      <Route exact path="/home">
      <Home/>
      </Route>

      {/* <Route path="/home">
      <Home/>
      </Route> */}
      <Route path="/user/:id">
        <UserDetail/>
      </Route>

        <Route path="*">
            <NoMatch/>
          </Route>

    </Switch>
    </Router>
  );
}

export default App;
