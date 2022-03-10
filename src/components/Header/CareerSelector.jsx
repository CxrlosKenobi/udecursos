import React, { useState, useEffect } from "react";
//
import data from '../../data/careers-data';
//
import "./CareerSelector.scss";


const carreras = data.carreras;

export function Accordion({ career, handler, accordionState, setAccordionState }) {
  const [accordion, setAccordion] = useState(null);

  useEffect(() => {
    accordionState ? (
      setAccordion(
        <div id='Accordion'>
          <ul>
            {carreras.map((option) => (
              <li key={option.id}
                  onClick={(() => handler(option))}
                  style={option.name === career.name ? (
                    {fontWeight: 'bold', textDecoration: 'underline #4C2BEE'}
                    ) : (null)
                  }
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )
    ) : (
      setAccordion(null)
    )
  }, [accordionState, setAccordionState, career, handler]);

  return <>{ accordion }</>
};

export function SubmenuList({ careerName, handleCareer }) {
  return (
    <section id="Career-list-wrapper">
      <ul>
        {carreras.map((option) => (
          <li key={option.id}
              onClick={(() => handleCareer(option))}
              style={option.name === careerName ? (
                {fontWeight: 'bold',
                 listStyle: 'disc',
                 textDecorationLine: 'underline',
                 textDecorationColor: '#4C2BEE',
                 textDecorationThickness: '2px'}
                ) : (null)
              }
          >
            {option.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
