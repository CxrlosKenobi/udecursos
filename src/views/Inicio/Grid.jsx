import React from "react";
import { Link } from "react-router-dom";
//
import malla from '../../assets/malla.png';
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
        <Link to="/Horario">
          <img src={malla} alt="Malla" />
          <div>
            <h2>Creador de Horarios</h2>
          </div>
        </Link>      
      </section>
      <section>
        <Link to="/Utilidades">
          <img src={malla} alt="Malla" />
          <div>
            <h2>Utilidades</h2>
          </div>
        </Link>
      </section>
    </div>
  );
};
