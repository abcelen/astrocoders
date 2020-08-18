import React from "react";
import Home from "./Home";
import Students from "./students/Students";
import { Route, Switch } from "react-router-dom";
import Mentors from "./mentors/Mentors";
import Admin from "./admin/Admin";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/students" component={Students} exact />
        <Route path="/mentors" component={Mentors} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
