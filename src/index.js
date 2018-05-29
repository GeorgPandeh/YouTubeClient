import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Player from "./player/player"

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/player' component={Player}/>
    </Switch>
</Router>,
document.getElementById('root')
);
registerServiceWorker();
