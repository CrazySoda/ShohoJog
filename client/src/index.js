import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(<App />);