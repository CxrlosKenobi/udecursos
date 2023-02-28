import { createContext, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgClose as CloseIcon } from "react-icons/cg";
import { IoMdArrowDropdown as DropdownIcon } from "react-icons/io";

//
import ThemeHandler from "./components/ThemeHandler";
import Selector from "./components/CareerHandler";
import BurgerMenu, { BurgerBtn } from "./components/BurgerMenu";
import { cleanCareer, careerSelector } from "../../redux/slices/career";
import { useOutsideClick } from "../../utils/helpers";
import "./index.scss";

export const HeaderContext = createContext(null);

export default function Header() {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);
  
  const selectorNode = useRef(null);
  const [selectorState, setSelectorState] = useOutsideClick(selectorNode, false, "toggle-selector");
  const [menuState, setMenuState] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  
  const toggleSelector = () => setSelectorState(!selectorState);
  const toggleMenu = () => setMenuState(!menuState);
  const toggleSubmenu = () => setSubmenu(!submenu);

  // TODO: Get this automatically
  const periodoUdeC = `UdeC ${new Date().getFullYear()}-1`;

  return (
    <header>
      <div className="header-wrapper">
        <Link to="/" className="logo-heading">
          <div className="heading-container">
            <h1>UdeCursos</h1>
            <p>(alpha)</p>
          </div>
        </Link>
        <ul id="NavBar">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/malla">
              Malla
            </Link>
          </li>
          <li className="careers-dropdown" onClick={toggleSelector}>
            Carreras
            <DropdownIcon className={selectorState ? "unhidden" : "hidden"} />
          </li>
        </ul>
        <div className="right-header">
          <h3>
            {Object.keys(career.info).length > 0 ? (
              <div className="career-info">
                <a href={career.info.link} target="_blank" rel="nostateer noreferrer">
                  {career.info.name}
                </a>
                <CloseIcon onClick={() => dispatch(cleanCareer())} className="remove-career" />
              </div>
            ) : (
              <p onClick={toggleSelector} className="career void">
                Seleccionar carrera
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

        {/* Smaller screens UI */}
        <HeaderContext.Provider
          value={[{ menuState, toggleMenu }, { submenu, toggleSubmenu }]}
        >
          <BurgerBtn />
          <BurgerMenu career={career} periodoUdeC={periodoUdeC} />
        </HeaderContext.Provider>
      </div>
      <Selector
        ref={selectorNode}
        careerName={career.info.name}
        selectorContext={{ selectorState, setSelectorState }}
      />
    </header>
  );
};
