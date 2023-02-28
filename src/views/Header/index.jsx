import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoSync } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
//
import ThemeHandler from './components/ThemeHandler';
import BurgerMenu, { BurgerBtn } from './components/BurgerMenu';
import Selector from './components/CareerHandler';
import { cleanCareer, careerSelector } from '../../redux/slices/career';
import { useOutsideClick, NavItem } from '../../utils/helpers';
import logo from '../../assets/logo.png';
import './index.scss';


export default function Header() {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);
  
  const selectorNode = useRef(null);
  const [selectorState, setSelectorState] = useOutsideClick(selectorNode, false, "toggle-selector");
  const [menuState, setMenuState] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  
  const toggleSelector = () => setSelectorState(!selectorState);
  const toggleMenu = () => setMenuState(!menuState);
  const toggleSubmenu = () => setSubmenu(!submenu);

  const periodoUdeC = `UdeC ${new Date().getFullYear()}-2`;

  return (
    <header>
      <div className="header-wrapper">
        <Link to="/" className="logo-heading">
          <div id='img-container'>
            <img src={logo} alt="Logo" height="70" width="52" />
          </div>
          <div className="heading-container">
            <h1>UdeCursos</h1>
            <p>(alpha)</p>
          </div>
        </Link>
        <ul id="NavBar">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/malla">Malla</NavItem>
        </ul>
        <div className="right-header">
          <h3>
            {Object.keys(career.info).length > 0 ? (
              <div className="career-info">
                <a href={career.info.link} target="_blank" rel="nostateer noreferrer">
                  {career.info.name}
                </a>
                <GoSync id="toggle-selector" onClick={toggleSelector} className="sync-icon" />
                <CgClose onClick={() => dispatch(cleanCareer())} className="remove-career" />
              </div>
            ) : (
              <p onClick={toggleSelector} className='career void'>
                (Click para elegir carrera)
              </p>
            )}
          </h3>
          <h3>
            <a href="http://secad.ing.udec.cl/horarios" target="_blank" rel="nostateer noreferrer">
              {periodoUdeC}
            </a>
          </h3>
        </div>
        <ThemeHandler />
        <BurgerBtn
          MenuContext={{ menuState, toggleMenu }}
          SubmenuContext={{ submenu, toggleSubmenu }}
        />
        <BurgerMenu
          MenuContext={{ menuState, toggleMenu }}
          SubmenuContext={{ submenu, toggleSubmenu }}
          career={career}
          periodoUdeC={periodoUdeC}
        />
      </div>
      <Selector
        ref={selectorNode}
        careerName={career.info.name}
        selectorContext={{ selectorState, setSelectorState }}
      />
    </header>
  );
};
