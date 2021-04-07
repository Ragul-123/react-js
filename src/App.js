import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashBoard";

import Register from "./Register";

function App() {

  return (
  <Router>
      <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />  
            <Route path='/Login' component={Login} />  
            <Route path='/Register' component={Register} /> 
            <Route path='/Dashboard/:emailID' component={Dashboard} />        
          </Switch>
      </div>
  </Router>
  );
}

export default App;