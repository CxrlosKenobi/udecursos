import React from "react";
import { Link } from "react-router-dom";
//
import malla from '../../assets/malla.png';
import mallaBlur from '../../assets/mallaBlur.png';
//
import "./Grid.scss";


export function SectionsGrid() {
  return (
    <div id="SectionsGrid">
      <section>
        <Link to="/Malla">
          <img src={malla} alt="Malla" />
          <div>
            <h2>Malla curricular</h2>
          </div>
        </Link>
      </section>
      <section>
        <a className="locked">
          <img src={mallaBlur} alt="Malla" />
          <div>
            <h2>Creador de Horarios (En desarrollo)</h2>
          </div>
        </a>      
      </section>
      <section>
        <a className="locked">
          <img src={mallaBlur} alt="Malla" />
          <div>
            <h2>Utilidades (En desarrollo)</h2>
          </div>
        </a>
      </section>
    </div>
  );
};
