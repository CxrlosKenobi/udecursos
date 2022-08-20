import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Header from "./views/Header/index";
import { ScrollWrapper } from "./utils/helpers";
import { Inicio } from "./views/Inicio/index";
import { Malla } from "./views/Malla/index";
import Footer from "./views/Footer/index";
import store from "./redux/store";
//
import "@atlaskit/css-reset";

export default function App() {

  return (
    <Provider store={store}>
      <div id="UdeCursos">
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
      </div>
    </Provider>
  );
};
