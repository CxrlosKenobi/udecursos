import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
//
import Layout from "./views/Layout";
import Inicio from "./views/Inicio";
import Malla from "./views/Malla";
import "@atlaskit/css-reset";

const UdeCursosRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route exact path="/" element={<Inicio/>} />
      <Route path="/malla" element={<Malla/>} />
    </Route>
  )
);

export default UdeCursosRouter;
