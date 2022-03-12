import React from "react";
import styled from 'styled-components';
//
import data from '../../data/careers-data';
//
import "./CareerSelector.scss";


const carreras = data.carreras;

export function Accordion({ careerName, handler, accordionState }) {
  return (
    <StyledAccordion id='Accordion' accordionState={accordionState}>
      <ul>
        {carreras.map((option) => (
          <li key={option.id}
              onClick={(() => handler(option))}
              className={option.name === careerName ? 'chosen' : ''}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </StyledAccordion>
  );
};

export function SubmenuList({ careerName, handleCareer }) {
  return (
    <section id="Career-list-wrapper">
      <ul>
        {carreras.map((option) => (
          <li key={option.id}
              onClick={(() => handleCareer(option))}
              className={option.name === careerName ? 'chosen' : ''}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </section>
  );
};


const StyledAccordion = styled.section`
  background-color: #FFF;
  border-radius: 5px;
  height: fit-content;
  width: 95%;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #10162f;
  position: relative;
  top: 0;
  transform: ${({ accordionState }) => accordionState ? 'translateY(0)' : 'translateY(-110%)'};
  transition: transform 200ms ease-in-out;
  z-index: -1;

  @media only screen and (max-width: 846px) {
    display: none;
  }
`;