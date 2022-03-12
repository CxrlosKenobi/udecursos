import React from "react";
//
import taskdemo from "../../assets/task-demo.png"
//
import "./Kickstart.scss";


export function Kickstart() {

  return (
    <section id="Kickstart">
      <div>
        <h1>¡Bienvenidx a la Malla Interactiva!</h1>
        <img src={taskdemo} alt="task-demo" />
        <h2>
          Puedes tomar y arrastrar los ramos de la malla para reordenarlos. <br />
          Visualiza tus semestres según los créditos que has cursado.
        </h2>
        <h3>Elige tu carrera UdeC para comenzar</h3>
      </div>
    </section>
  );
};
