import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<App />}>
        <Route index element={<Home/>}/>
        <Route path="*" element={<PaginaNaoEncontrada />} />
        {/*<Route path="Imoveis" element={<Imoveis />}>
            <Route path="imovelId" element={<Imovel />} />*/}
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

