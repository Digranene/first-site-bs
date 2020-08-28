import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NaviBar} from "./components/Navibar";
import {Home} from "./Home";
import {Users} from "./Users";
import {About} from "./About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Router>
                <NaviBar/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
