import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import AllActivities from "./pages/AllActivities";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/allactivities" component={AllActivities} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
