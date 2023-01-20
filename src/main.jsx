import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloApp';
import { CounterApp } from './CounterApp';

// Para importarlo de manera global
import './index.css';

//render el component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title='Hello World!!'/> */}
    <CounterApp value={ 7 }/>
  </React.StrictMode>
)
