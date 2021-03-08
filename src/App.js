import React from "react";
import Home from "./components/pages/Home";
import Seafood from "./components/pages/Seafood";
import Chicken from "./components/pages/Chicken";
import Beef from "./components/pages/Beef";
import Lamb from './components/pages/Lamb';
import Desserts from "./components/pages/Desserts";
import NavigationBar from "./components/ui/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="navbar">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/chicken'>
              <Chicken/>
            </Route>
            <Route path='/beef'>
              <Beef/>
            </Route>
            <Route path='/lamb'>
              <Lamb/>
            </Route>
            <Route path='/seafood'>
              <Seafood/>
            </Route>
            <Route path='/desserts'>
              <Desserts/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
