import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
//
import UdeCursosRouter from "./UdeCursos";
import store from "./redux/store";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={UdeCursosRouter} />
    </Provider>
  // </React.StrictMode>
);
