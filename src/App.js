import './css/App.css';
import '@atlaskit/css-reset';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Malla from './views/Malla';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/Malla">
                        <Malla/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
