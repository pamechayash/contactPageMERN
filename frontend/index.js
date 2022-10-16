import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LetsConnect from './LetsConnect';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <Routes>
     
      <Route path="/" element={<LetsConnect />} /> 
    
   
    <Route path="/home" element={<Home />}/>
   


    </Routes>
    </BrowserRouter>

 
);

