import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export function Menu ({ menuState, toggleMenu }) {
  return (
    <StyledMenu menuState={menuState}>
      <Link to="/" onClick={toggleMenu}>Inicio</Link>
      <Link to="/Malla" onClick={toggleMenu}>Malla</Link>
      <Link to="Utilidades" onClick={toggleMenu}>Utilidades</Link>
    </StyledMenu>
  );
};

export function Burger ({ menuState, toggleMenu }) {
  return (
    <StyledBurger menuState={menuState} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #FFF0E5;
  transform: ${({ menuState }) => menuState ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  width: 40%;
  max-width: 400px;
  text-align: right;
  padding: 5rem 1.5rem 2rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 1.2rem;
    padding: 1.5rem 0;
    font-weight: 400;
    letter-spacing: 0.1rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    border-bottom: 1px solid #090B13;

    &:hover { color: #10162F; }
    &:active { color: #10162F; }
  }
  @media only screen and (max-width: 412px) {
    width: 60%;
  }
`

const StyledBurger = styled.button`
  display: none;

  @media only screen and (max-width: 846px) {
    position: relative;
    top: 28%;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    transform: scale(0.9);
    z-index: 3;
    &:focus {
      outline: none;
    }
    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ menuState }) => menuState ? '#0D0C1D' : '#090B13'};
      border-radius: 10px;
      transition: all 200ms linear;
      position: relative;
      transform-origin: 1px;
      :first-child {
        transform: ${({ menuState }) => menuState ? 'rotate(45deg)' : 'rotate(0)'};
      }
      :nth-child(2) {
        opacity: ${({ menuState }) => menuState ? '0' : '1'};
        transform: ${({ menuState }) => menuState ? 'translateX(20px)' : 'translateX(0)'};
      }
      :nth-child(3) {
        transform: ${({ menuState }) => menuState ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`
