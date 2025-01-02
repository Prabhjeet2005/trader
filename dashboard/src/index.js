import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        <Route exact path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>

);

