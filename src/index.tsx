import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import Casa from './Casa';
import Imoveis from './Imoveis';
import Ap from './apartamento'
import Quarto from './quarto'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>  
      <Route path= "/imoveis" element={<App />}>
        <Route index element={<Imoveis/>}/>
        <Route path="Casa" element={<Casa/>}/>
        <Route path="ap" element={<Ap/>}/>
        <Route path="quarto" element={<Quarto/>}/>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

