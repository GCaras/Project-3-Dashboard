import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

const BackgroundStyle = styled.div`
    background-size: cover;
    background: linear-gradient(180deg, 
                rgba(62,62,62,1) 0%, 
                rgba(111,111,111,1) 50%, 
                rgba(161,161,161,1) 100%);
    margin: 0 auto;
    min-height: 915px;
`

ReactDOM.render(
    <BackgroundStyle>
        <Router>
            <App/>
        </Router>
    </BackgroundStyle>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
