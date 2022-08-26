import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoSync } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
//
import ThemeHandler from './components/ThemeHandler';
import BurgerMenu, { BurgerBtn } from './components/BurgerMenu';
import Selector from './components/CareerHandler';
import { NavItem } from '../../utils/helpers';
import { cleanCareer, careerSelector } from '../../redux/careerSlice';
import logo from '../../assets/logo.png';
import './index.scss';


export default function Header() {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);

  const [menuState, setMenuState] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [accordionState, setAccordionState] = useState(false);

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
          </div>
        </Link>
        <ul id="NavBar">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/Malla">Malla</NavItem>
          <NavItem to="/Utilidades">Utilidades</NavItem>
        </ul>
        <div className="right-header">
          <h3>
            {Object.keys(career.info).length > 0 ? (
              <div className="career-info">
                <a href={career.info.link} target="_blank" rel="nostateer noreferrer">
                  {career.info.name}
                </a>
                <GoSync onClick={() => setAccordionState(!accordionState)} className="sync-icon" />
                <CgClose onClick={() => dispatch(cleanCareer())} className="remove-career" />
              </div>
            ) : (
              <p onClick={() => setAccordionState(!accordionState)} className='career void'>
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
          SubmenuContext={{ submenu, setSubmenu }}
        />
        <BurgerMenu
          MenuContext={{ menuState, toggleMenu }}
          SubmenuContext={{ submenu, toggleSubmenu }}
          career={career}
          periodoUdeC={periodoUdeC}
        />
      </div>
      <Selector
        careerName={career.info.name}
        accordionContext={{ accordionState, setAccordionState }}
      />
    </header>
  );
};
