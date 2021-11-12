import '../css/Header.css';
import logo from '../assets/logo.png';


const Header = () => {
    const BurgerNav = () => {
        return (
            <nav id="navigation">
                <div id="menu-toggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {/* <p><a href="http://secad.ing.udec.cl/horarios">Udec 2021-2</a></p> */}
                        <li><a href="/Inicio">Inicio</a></li>
                        <li><a href="/Malla">Malla</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
    
    const NavItem = (props) => {
        return (
            <li>
                <a href={props.go}>
                    {props.children}
                </a>
            </li>
        );
    }

    const NavBar = () => {
        return (
            <ul id="NavBar">
                <NavItem go="/Inicio">Inicio</NavItem>
                <NavItem go="/Malla">Malla</NavItem>
                {/* <NavItem go="/Horarios">Horarios</NavItem> */}
            </ul>
        );
    }
    return (
        <header className="Header">
            <div className="HeaderContent">
                <div className="presentation">
                    <div id='img-container'>
                        <a href="/">
                            <img src={logo} alt="logo" height="70" width="52"/>
                        </a>
                    </div>
                    <div id="heading-container">
                        <h1>UdeCursos</h1>
                    </div>
                </div>
                <NavBar />                
                <BurgerNav />
                <div id="RightHeader">
                    <h3>
                        <a href="http://www.inf.udec.cl/" 
                            target="_blank" rel="noopener noreferrer">
                            Ingeniería Civil Informática
                        </a>
                    </h3>
                    <h3>
                        <a href="http://secad.ing.udec.cl/horarios"
                            target="_blank" rel="noopener noreferrer"
                        >
                            UdeC 2021-2
                        </a>
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Header;

