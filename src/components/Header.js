import '../css/Header.css';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const H3 = styled.h3`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 12px;
  font-weight: bold;
  color: #10162F;

`;

const Header = () => {
    return (
        <header className="Header">
            <div className="HeaderContent">
            <nav id="navigation">
                <div id="menu-toggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {/* <p><a href="http://secad.ing.udec.cl/horarios">Udec 2021-2</a></p> */}
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Malla">Malla</a></li>
                    </ul>
                </div>
            </nav>
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

                <div className="RightHeader">
                <h3>
                    <a 
                    href="http://www.inf.udec.cl/"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <H3>Ingeniería Civil Informática</H3>
                    </a>
                </h3>
                <h3>
                    <a 
                    href="http://secad.ing.udec.cl/horarios"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <H3>UdeC 2021-2</H3>
                    </a>
                </h3>
                </div>
            </div>
        </header>
    )
}

export default Header;

