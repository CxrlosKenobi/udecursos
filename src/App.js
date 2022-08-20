import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Header from "./views/Header/index";
import { ScrollWrapper } from "./utils/helpers";
import { Inicio } from "./views/Inicio/index";
import { Malla } from "./views/Malla/index";
import Footer from "./views/Footer/index";
//
import "@atlaskit/css-reset";


export default function UdeCursos() {
  return (
    <Provider store={store}>
      <section id="UdeCursos">
        <BrowserRouter>
          <Header/>
          <ScrollWrapper>
            <Routes>
              <Route exact path="/" element={<Inicio/>} />
              <Route path="/Malla" element={<Malla/>} />
            </Routes>
          </ScrollWrapper>
          <Footer/>
        </BrowserRouter>
      </section>
    </Provider>
  );
};
