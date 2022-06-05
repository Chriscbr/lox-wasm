import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import('lox-wasm').then((wasm) => {
//   console.error(wasm);
//   alert(wasm.run_code("print 3 + 5"));
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
