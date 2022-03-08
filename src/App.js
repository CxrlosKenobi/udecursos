import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Header from './components/Header/index';
import { Inicio } from './views/Inicio/index';
import { Malla } from './views/Malla/index';
import { Utilidades } from './views/Utilidades/index';
import Footer from './components/Footer/index';
//
import '@atlaskit/css-reset';
import './App.css';


export default function UdeCursos() {
  return (
    <section id='UdeCursos'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Inicio/>} />
          <Route path="/Malla" element={<Malla/>} />
          <Route path="/Utilidades" element={<Utilidades/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </section>
  );
};
