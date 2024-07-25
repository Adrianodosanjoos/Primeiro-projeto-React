import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home"
import Users from "./containers/Users"


function Routes() {

    return (
        <Router>
            <Switch>
                <Router exact path="/" componet={Home} />
                <Router exact path="usuarios" componet={Users} />
            </Switch>

        </Router>
    )

}

export default Routes