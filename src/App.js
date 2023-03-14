import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 import Checkout from "./Checkout"
 import Loogin from './Loogin'
import { Login } from '@mui/icons-material';
      

function App() {
  return (
      <Router>
    <div className="App">
    <Switch>
      <Route path='/login'>
        <Loogin/>
      </Route>
    <Route path='/checkout'>
      <Header/>
      <Checkout/>
      </Route>
      <Route path='/'>
      <Header/>
     <Home/>
      </Route>
    
    </Switch>
    </div>
      </Router>
  );
  
}

export default App;
