import Informatica from "../../../data/mallas-carreras/Informatica";
import Fisica from "../../../data/mallas-carreras/Fisica";
import IngFisica from "../../../data/mallas-carreras/IngFisica";
import Aeroespacial from "../../../data/mallas-carreras/Aeroespacial";
import Astronomia from "../../../data/mallas-carreras/Astronomia";
import Electronica from "../../../data/mallas-carreras/Electronica";
import Industrial from "../../../data/mallas-carreras/Industrial";
import Biomedica from "../../../data/mallas-carreras/Biomedica";
import Estadistica from "../../../data/mallas-carreras/Estadistica";
import Default from "../../../data/mallas-carreras/Default";

export default function SeekCareer(career) {
  switch (career) {
    case "Ing. Civil Informática":
      return Informatica;

    case "Ciencias Físicas":
      return Fisica;

    case "Ing. Física":
      return IngFisica;

    case "Ing. Civil Aeroespacial":
      return Aeroespacial;

    case "Astronomía":
      return Astronomia;

    case "Ing. Civil Electrónica":
      return Electronica;

    case "Ing. Civil Industrial":
      return Industrial;
    
    case "Ing. Civil Biomédica":
      return Biomedica;

    case "Ing. Estadística":
      return Estadistica;

    default:
      return Default;
  }
};
