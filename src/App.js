import '@atlaskit/css-reset';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Inicio from './views/Main';
import Malla from './views/Malla';
import Utilidades from './views/Utilidades';
import Footer from './components/Footer';

export default function UdeCursos() {
    return (
        <div id='UdeCursos'>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/Inicio' exact component={Inicio}/>
                    <Route path="/Malla" exact component={Malla}/>
                    <Route path="/Utilidades" exact component={Utilidades}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}
