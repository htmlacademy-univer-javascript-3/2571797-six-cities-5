import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {offersMock} from './mocks/offers';


const placesCount = 420;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={placesCount} offers={offersMock}/>
  </React.StrictMode>
);
