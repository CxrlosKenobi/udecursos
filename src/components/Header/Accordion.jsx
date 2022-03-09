import React, { useState, useEffect } from "react";
//
import "./Accordion.scss";


export function Accordion({ data, career, handler, accordionState, setAccordionState }) {
  const [accordion, setAccordion] = useState(null);

  useEffect(() => {
    accordionState ? (
      setAccordion(
        <div id='Accordion'>
          <ul>
            {data.map((option) => (
              <li key={option.id}
                  style={option.name === career.name ? (
                    {fontWeight: 'bold', textDecoration: 'underline #4C2BEE'}
                    ) : (null)
                  }
                  onClick={(() => {
                    handler(option);
                    document.querySelector('.right-header a').style.color = '#10162F';
                    setTimeout(() => setAccordionState(false), 250);
                  })}
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
  }, [accordionState, setAccordionState, career, data, handler]);

  return <>{ accordion }</>
};
