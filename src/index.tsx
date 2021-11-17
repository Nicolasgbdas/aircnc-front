import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Aircnc from './Aircnc';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import Imoveis from './Imoveis';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>  
      <Route path= "/" element={<App />}>
        <Route index element={<Aircnc/>}/>
        <Route path="*" element={<PaginaNaoEncontrada />} />
        <Route path="Imoveis" element={<Imoveis />} />
          {/*  <Route path=":imovelId" element={<Imovel />} />*/}
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

