import React from 'react';
import Apicall from './api-call-example.js';
import Names from './input-box-example.js';
import Scientist from './scientist.js';
import Header from './header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function List() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Names />} />
        <Route path="/scientist" element={<Scientist />} />
        <Route path="/apicall" element={<Apicall />} />
      </Routes>
    </BrowserRouter>

  );



}
