import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import { sendCareer, cartSelector } from '../../state/cartSlice';
import { Accordion } from './CareerSelector';
import { NavItem } from '../../utils/helpers';
import { Burger, Menu } from './BurgerMenu';
import { GoSync } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
import logo from '../../assets/logo.png';
//
import './index.scss';


export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [accordionState, setAccordionState] = useState(false);
  const [career, setCareer] = useState({});

  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const toggleMenu = () => setMenuState(!menuState);
  const toggleSubmenu = () => setSubmenu(!submenu);

  const periodoUdeC = `UdeC ${new Date().getFullYear()}-1`;

  function handleCareer(career) {
    setCareer(career);
    dispatch(sendCareer(career));
    setAccordionState(false);
  }

  function cleanCareer() {
    setCareer({});
    dispatch(sendCareer({}));
  }


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
          <NavItem to="/Horario">Horario</NavItem>
          <NavItem to="/Utilidades">Utilidades</NavItem>
        </ul>
        <div className="right-header">
          <h3>
            {cart.career.name !== undefined ? (
              <div className="career-info">
                <a
                  href={career.link}
                  target="_blank"
                  rel="nostateer noreferrer"
                >
                  {cart.career.name}
                </a>
                <GoSync
                  className="sync-icon"
                  onClick={() => setAccordionState(!accordionState)}
                />
                <CgClose
                  onClick={cleanCareer}
                  className="remove-career"
                />
              </div>
            ) : (
              <p
                className='career void'
                onClick={() => setAccordionState(!accordionState)}
              >
                (Click para elegir carrera)
              </p>
            )}
          </h3>
          <h3>
            <a
              href="http://secad.ing.udec.cl/horarios"
              target="_blank"
              rel="nostateer noreferrer"
            >
              {periodoUdeC}
            </a>
          </h3>
        </div>
        <Burger
          menuState={menuState}
          toggleMenu={toggleMenu}
          submenu={submenu}
          setSubmenu={setSubmenu}
        />
        <Menu
          menuState={menuState}
          toggleMenu={toggleMenu}
          submenu={submenu}
          toggleSubmenu={toggleSubmenu}
          career={cart.career}
          handleCareer={handleCareer}
          cleanCareer={cleanCareer}
          periodoUdeC={periodoUdeC}
          CgClose={CgClose}
        />
      </div>
      <Accordion
        careerName={cart.career.name}
        setCareer={setCareer}
        handler={handleCareer}
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
    </header>
  );
};
