import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Root from './components/Root'
import history from './history';
import { PetProvider } from './contexts/PetContext';

ReactDOM.render(
    <Router history={history}>
        <PetProvider>
            <Root />
        </PetProvider>
    </Router>, document.getElementById('root'))
