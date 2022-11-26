import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
//import { SayMyName } from './SayMyName';
import { CounterApp } from './CounterApp';
import './style.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp counter={0} />
        {/* <HelloWorldApp /> */}
    </React.StrictMode>
)