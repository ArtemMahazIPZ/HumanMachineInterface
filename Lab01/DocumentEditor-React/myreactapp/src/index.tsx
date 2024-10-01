import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerLicense} from '@syncfusion/ej2-base'
registerLicense("ORg4AjUWIQA/Gnt2UlhhQlVMfV5CQmBJYVF2R2dJfFR0d19FaEwxOX1dQl9nSXdQdkRlWn9bcnRcQGY=")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
