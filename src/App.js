import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Header from './components/Header';
import Inicio from './views/Main';
import Malla from './views/Malla';
import Utilidades from './views/Utilidades';
import Footer from './components/Footer';
//
import '@atlaskit/css-reset';
import './css/App.css';


export default function UdeCursos() {
  return (
    <main id='UdeCursos'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={Inicio}/>
          <Route path="/Malla" element={Malla}/>
          <Route path="/Utilidades" element={Utilidades}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}
