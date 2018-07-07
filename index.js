import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calk from "./Comp/Calk/Calk";

ReactDOM.render(
    <div>
        <App/>
        <Calk/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
