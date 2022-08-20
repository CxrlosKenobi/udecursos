import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import ThemeHandler from './components/ThemeHandler';
import { setCareer, cleanCareer, careerSelector } from '../../redux/careerSlice';
import { Accordion } from './components/CareerSelector';
import { NavItem } from '../../utils/helpers';
import BurgerMenu, { BurgerBtn } from './components/BurgerMenu';
import { GoSync } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
import logo from '../../assets/logo.png';
//
import './index.scss';


export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [accordionState, setAccordionState] = useState(false);

  const dispatch = useDispatch();
  const career = useSelector(careerSelector);

  const toggleMenu = () => setMenuState(!menuState);
  const toggleSubmenu = () => setSubmenu(!submenu);

  const periodoUdeC = `UdeC ${new Date().getFullYear()}-1`;

  function handleCareer(chosenCareer) {
    dispatch(setCareer(chosenCareer));
    setAccordionState(false);
  };


  return (
    <header>
      <div className="header-wrapper">
        <Link to="/" className="logo-heading">
          <div id='img-container'>
            <img src={logo} alt="Logo" height="70" width="52"/>
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
            {career.chosen.name !== undefined ? (
              <div className="career-info">
                <a href={career.chosen.link} target="_blank" rel="nostateer noreferrer">
                  {career.chosen.name}
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
          menuState={menuState}
          toggleMenu={toggleMenu}
          submenu={submenu}
          setSubmenu={setSubmenu}
        />
        <BurgerMenu
          menuState={menuState}
          toggleMenu={toggleMenu}
          submenu={submenu}
          toggleSubmenu={toggleSubmenu}
          career={career.chosen}
          handleCareer={handleCareer}
          periodoUdeC={periodoUdeC}
          CgClose={CgClose}
        />
      </div>
      <Accordion
        careerName={career.chosen.name}
        setCareer={setCareer}
        handler={handleCareer}
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
    </header>
  );
};
