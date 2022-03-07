import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
import { Accordion, AccordionMenu } from './Accordion';
import { NavItem } from '../../utils/helpers';
import { Burger, Menu } from './BurgerMenu';
import data from '../../data/careers-data';
import logo from '../../assets/logo.png';
//
import './index.scss';


export default function Header() {
  const [career, setCareer] = useState({id: 99, name: '(Elige una carrera del menu)'});
  const [accordionState, setAccordionState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  let careerData = data.carreras;

  const toggleMenu = () => setMenuState(!menuState);

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
          <NavItem to="/Horarios">Auto-Horario</NavItem>
          {/* <AccordionMenu
            children="Carreras"
            state={accordionState}
            setState={setAccordionState}
            /> */}
          <NavItem to="/Utilidades">Utilidades</NavItem>
        </ul>
        <div className="right-header">
          <h3>
            {career.id !== 99 ? (
              <a id='career' href={career.link}
                target="_blank" rel="nostateer noreferrer">
                {career.name}
              </a>
            ) : (
              <p id='career' onClick={() => accordionState ? setAccordionState(false) : (setAccordionState(true))}>
                {career.name}
              </p>
            )}
          </h3>
          <h3>
            <a href="http://secad.ing.udec.cl/horarios"
              target="_blank" rel="nostateer noreferrer">
              UdeC 2021-2
            </a>
          </h3>
        </div>
        <Burger menuState={menuState} toggleMenu={toggleMenu} />
        <Menu menuState={menuState} toggleMenu={toggleMenu} />
      </div>
      <Accordion
        careerData={careerData}
        career={career}
        setCareer={setCareer}
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
    </header>
  );
};
