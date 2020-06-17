import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.js";
import Alert from "./components/layout/Alert.js";
import User from "./components/users/User.js";
import About from "./components/pages/About.js";
import Home from "./components/pages/Home.js";
import NotFound from "./components/pages/NotFound.js";
import "./App.css";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="root">
                        <Navbar />
                        <div className="container">
                            <Alert />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route
                                    exact
                                    path="/user/:login"
                                    component={User}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
