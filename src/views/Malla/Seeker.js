import Informatica from "../../data/mallas-carreras/Informatica";
import Fisica from "../../data/mallas-carreras/Fisica";
import Aeroespacial from "../../data/mallas-carreras/Aeroespacial";
import Astronomia from "../../data/mallas-carreras/Astronomia";
import Matematica from "../../data/mallas-carreras/Matematica";
import Medicina from "../../data/mallas-carreras/Medicina";


export default function SeekCareer(career) {
  switch (career) {
    case "Ing. Civil Informática":
      return Informatica;

    case "Ciencias Física":
      return Fisica;

    case "Ing. Civil Aeroespacial":
      return Aeroespacial;

    case "Astronomía":
      return Astronomia;

    case "Ing. Civil Matemática":
      return Matematica;

    case "Medicina":
      return Medicina;

    default:
      return Informatica;
  }

};