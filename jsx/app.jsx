import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as 
    Router,
    Route,
    Switch,
    Link} from 'react-router-dom';

import Quiz from './quiz.jsx';

function App() {
    return(
        <p>hello test</p>
    )
}
function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
    )
}
ReactDOM.render((
    <Router>
        <AppRouter />
    </Router>
), document.getElementById('app'));