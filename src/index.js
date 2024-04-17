import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import App from './App';

studio.initialize();
studio.extend(extension);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
