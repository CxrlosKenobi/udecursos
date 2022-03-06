import React, { useState, useEffect } from "react";
//
import arrow from '../../assets/arrow.png';
import arrowHover from '../../assets/arrowHover.png';
//
import "./Accordion.scss";


export function Accordion({ careerData, career, setCareer, accordionState, setAccordionState }) {
  const [accordion, setAccordion] = useState(null);

  useEffect(() => {
    if (career.id === 99)
      document.querySelector('#career').style.color = '#707070';

  }, [career.id])

  useEffect(() => {
    if (accordionState) {
       setAccordion(
        <div id='accordion'>
          <ul>
            {careerData.map((option) => (
              <li key={option.id}
                  style={option.name === career.name ? {
                    fontWeight: 'bold', textDecoration: 'underline #4C2BEE'} : {}}
                  onClick={(() => {
                    setCareer(option);
                    document.querySelector('.right-header a').style.color = '#10162F';
                    setTimeout(() => setAccordionState(false), 250);
                  })}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else setAccordion(<></>);
  }, [accordionState, setAccordionState, career, careerData, setCareer])

  return <>{ accordion }</>
};


export function AccordionMenu({ children, state, setState }) {
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState(arrow);

  useEffect(() => hover ? setIcon(arrowHover) : setIcon(arrow), [hover])

  return (
    <div className='aux-li'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
      <li
        onClick={() => state
          ? setState(false)
          : (setState(true))}
      >
        {children}
      </li>
      <img className='arrow' src={icon} alt='Carreras' />
    </div>
  );
};
