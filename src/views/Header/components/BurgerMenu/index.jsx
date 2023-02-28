import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
//
import { HeaderContext } from "../../index";
import { pushProcess, updateProcess } from "../../../../redux/slices/processes";
import {
  cleanCareer,
  setCareerInfo,
  stateMalla,
  cleanApprovedCredits
} from "../../../../redux/slices/career";
import { mallaBuilder, SubmenuList } from "../CareerHandler";
import { ShadeLayer } from "../../../../utils/helpers";
import "./index.scss";


export default function BurgerMenu ({ career, periodoUdeC }) {
  const { menuState, toggleMenu } = useContext(HeaderContext)[0];
  const { submenu, toggleSubmenu } = useContext(HeaderContext)[1];
  const dispatch = useDispatch();

  if (!menuState && submenu) toggleSubmenu();

  function careerHandler(chosen) {
    dispatch(cleanApprovedCredits());
    dispatch(setCareerInfo(chosen));
    toggleSubmenu();
    setTimeout(() => toggleMenu(), 200);

    dispatch(pushProcess({ id: "malla" }));
    mallaBuilder(chosen.code).then((malla) => {
      dispatch(stateMalla(malla));
      dispatch(updateProcess({ id: "malla", status: "success" }));
    }).catch((err) => {
      console.error("Error on building malla: ", err);
      dispatch(updateProcess({ id: "malla", status: "error" }));
    });
  }

  return (
    <>
      <ShadeLayer state={menuState} onClick={toggleMenu} />
      <StyledMenu id="BurgerMenu" menuState={menuState}>
        <Link to="/" onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/malla" onClick={toggleMenu}>
          Malla
        </Link>
        <div onClick={toggleSubmenu}>
          <span>Elegir Carrera</span>
          <FiChevronRight className="icon" />
        </div>
        {career.info.name !== undefined ? (
          <div className="career-info">
            <a
              href={career.link}
              target="_blank"
              rel="nostateer noreferrer"
            >
              {career.info.name}
            </a>
            <CgClose
              onClick={() => dispatch(cleanCareer())}
              className="remove-career"
            />
          </div>
        ) : (
          <p className="career-info void">
            (Elige una carrera)
          </p>
        )}
      <h3>
        <a href="http://secad.ing.udec.cl/horarios" target="_blank" rel="nostateer noreferrer">
          {periodoUdeC}
        </a>
      </h3>
      </StyledMenu>
      <StyledSubmenu id="Submenu" submenu={submenu}>
        <div onClick={toggleSubmenu}>
          <IoIosArrowRoundBack className="icon" />
          <span>Volver</span>
        </div>
        <SubmenuList careerName={career.info.name} careerHandler={careerHandler} />
      </StyledSubmenu>
    </>
  );
};

export function BurgerBtn() {
  const { menuState, toggleMenu } = useContext(HeaderContext)[0];
  const { submenu, setSubmenu } = useContext(HeaderContext)[1];

  function handleToggles() {
    if (submenu) setSubmenu(false);
    toggleMenu();
  };

  return (
    <StyledBurger id="BurgerBtn" menuState={menuState} onClick={handleToggles}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledSubmenu = styled.section`
  display: none;

  @media only screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--secondary-color);
    transform: ${({ submenu }) => (submenu ? "translateX(0)" : "translateX(100%)")};
    height: 100vh;
    max-height: 100vh;
    width: 65%;
    max-width: 400px;
    text-align: left;
    padding: 0 1rem 2rem 0rem;
    margin-top: 4.89rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.25s ease-in-out;

    @media only screen and (min-width: 668px) {
      max-width: 430px;
    }
    @media only screen and (min-width: 453px){
      width: 60%;
    }
  }
`;

const StyledMenu = styled.nav`
  display: none;
  @media only screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #FFF;
    transform: ${({ menuState }) => menuState ? "translateX(0)" : "translateX(100%)"};
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
    width: 56%;
    max-width: 400px;
    text-align: right;
    padding: 0 1.5rem 2rem 2rem;
    margin-top: 4.89rem;
    border-left: 1px solid var(--border-color);
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    & a, & div {
      font-size: 1.1rem;
      padding: 1.5rem 0;
      font-weight: 400;
      letter-spacing: 0.1rem;
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s linear;
      border-bottom: 1px solid var(--border-color);
      user-select: none;

      &:hover { color: #10162F; }
      &:active { color: #10162F; }
    }
    & .locked {
      color: gray;
      &:hover { color: gray; }
      &:active { color: gray; }
    }
    & .first { border-top: 1px solid #090B13; }
  }
`;

const StyledBurger = styled.button`
  display: none;

  @media only screen and (max-width: 930px) {
    position: relative;
    top: 25%;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2.6rem;
    height: 2.7rem;
    background: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    z-index: 10;
    transform: scale(0.9);
    z-index: 3;
    order: 3;
    &:focus {
      outline: none;
    }
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: var(--text-color);
      border-radius: 10px;
      transition: all 200ms linear;
      position: relative;
      transform-origin: 1px;
      :first-child {
        transform: ${({ menuState }) => menuState ? "rotate(45deg)" : "rotate(0)"};
      }
      :nth-child(2) {
        opacity: ${({ menuState }) => menuState ? "0" : "1"};
        transform: ${({ menuState }) => menuState ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ menuState }) => menuState ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;
