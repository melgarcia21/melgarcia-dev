import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const ioniconsModule = document.createElement('script');
ioniconsModule.type = 'module';
ioniconsModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModule);

const ioniconsNoModule = document.createElement('script');
ioniconsNoModule.noModule = true;
ioniconsNoModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNoModule);