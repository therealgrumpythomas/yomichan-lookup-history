import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@picocss/pico';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Double invokes of useEffect come from strict mode
  // https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
