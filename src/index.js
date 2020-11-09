import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Root from './components/Root'
import history from './history';


ReactDOM.render(
    <Router history={history}>
        <Root />
    </Router>, document.getElementById('root'))
