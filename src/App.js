import './App.css';
import React, { useEffect } from 'react';
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './containers/Home';
import ProfilePage from './containers/ProfilePage';


function App() {

  return (
    
    <Router>
      <Navbar />
      <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/home" render={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profilepage" render={ProfilePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;