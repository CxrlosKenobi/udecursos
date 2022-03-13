const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const fs = require("fs");
//
const { checkBooleanRegex } = require("./utils/helpers");


const globalList = [];
const unwantedItems = [
  "HORARIO Semestre 2022-1",
  "Facultad de Ingeniería",
  "SECRETARÍA ACADÉMICA",
  "FACULTAD DE INGENIERÍA",
  "Departamento de Ingeniería Civil",
  "Autoriza DICIV",
  "Autoriza Depto.",
  "Autoriza DIE",
  "Autoriza DIIND",
  "Autoriza DIAMB",
  "Autoriza DIINF",
  "1 año:Aer-125 créd:Ele/Eln-70 cré:INF",
  "Prerrequisitos",
  "Licenciatura",
  "Primer Año Ingeniería",
  "Aprobado semestre 4 del Plan Estudio",
  "Aprobado semestre 9 del Plan de Estudios",
  "Aprobado el semestre 9 del Plan de Estud"
];


const pdfPath = "./Test.pdf";
const loadingTask = pdfjsLib.getDocument(pdfPath);

loadingTask.promise
  .then((doc) => {
    const numPages = doc.numPages;
    console.log("# Document Loaded");

    let lastPromise; // will be used to chain promises
    lastPromise = doc.getMetadata().then((data) => {
      console.log("# Metadata Is Loaded");
    });

    const loadPage = async (pageNum) => {
      const page = await doc.getPage(pageNum);
      const content = await page
        .getTextContent();

        content.items.map((item) => {
          if ((!unwantedItems.includes(item.str))
          && !checkBooleanRegex(/\d{6}\ ?\-\ ?\d{6}/g, item.str)
          && !checkBooleanRegex(/\d{6}/g, item.str)
          && !checkBooleanRegex(/\(\d{6}\)/g, item.str)
          && !checkBooleanRegex(/\d{1,3} créditos/g, item.str)
          ) {
            return globalList.push(item.str);
          } else return null;
        });

        page.cleanup();

      return console.log(`Page ${pageNum} Loaded`);
    };

    for (let i = 1; i <= numPages; i++) {
      lastPromise = lastPromise.then(loadPage.bind(null, i));
    }

    return lastPromise;
  })

  .then(() => {
    console.log("# End of Document\n");

    const Sched = require("./Sched.json");

    let pivot = 0, depto = 0, idCounter = null;
    globalList.map((item, index) => {
      if (item === "Asignatura") {
        depto += 1;
        idCounter = -1;

      } else if (checkBooleanRegex(/\d{6}-\d/g, item)) {
        const template = getTemplate();
        idCounter += 1;
        pivot = index;

        template.id = idCounter; // ID
        template.codigo = item; // Codigo

        // Asignatura
        if (globalList[pivot + 1] === " ")
          template.asignatura = globalList[pivot + 2];
          pivot += 2;

        template.cr = parseInt(globalList[pivot + 2]); // CR
        pivot += 2;

        template.ht = parseInt(globalList[pivot + 2]); // HT
        pivot += 2;

        template.hp = parseInt(globalList[pivot + 2]); // HP
        pivot += 2;

        template.hl = parseInt(globalList[pivot + 2]); // HL
        pivot += 2;

        template.carrera = globalList[pivot + 2].split("/"); // Carrera
        pivot += 2;

        // Profesores
        if (!(globalList[pivot + 2].includes("[T]" || "Fija Profesor" || "Horario"))) {
          if (globalList[pivot + 3] !== " " &&
              globalList[pivot + 3] !== undefined &&
              !globalList[pivot + 3].includes("[T]" || "Fija Profesor" || "Horario") &&
              !checkBooleanRegex(/\d{6}-\d/g, globalList[pivot + 3])
          ) {
            const mergedProfs = globalList[pivot + 2].concat(" ").concat(globalList[pivot + 3]);
            template.profesores = mergedProfs.split(" - ");
            pivot += 3;
          } else {
            template.profesores = globalList[pivot + 2].split(" - ");
            pivot += 2;
          }
        } else {
          template.profesores = "";
        }


        // Horarios y Salas (T y P|L)
        if (globalList[pivot + 2] !== undefined &&
          (globalList[pivot + 2].includes("[T]") || globalList[pivot + 2].includes("Fija Profesor") ||
          globalList[pivot + 2].includes("Horario"))
        )
          template.horariosYSalas.T = globalList[pivot + 2].split(" - ");
        else
          template.horariosYSalas.T = "";

        if (globalList[pivot + 2] !== undefined && globalList[pivot + 3] !== undefined &&
          (globalList[pivot + 3].includes("[L]") || globalList[pivot + 3].includes("[P]"))
        )
          template.horariosYSalas.P = [globalList[pivot + 3]];
        else
          template.horariosYSalas.P = "";



        console.log("Iteration: ", index)
        // Sched[Object.keys(Sched)[depto]][idCounter] = template;
        // console.log(`\n\nTemplate:`);
        // console.log(template);
        // console.log('\nQuery: ')
        // console.log(Sched[Object.keys(Sched)[1]])

        console.log("depto: ", depto);
        console.log();
        Sched[Object.keys(Sched)[depto]].push(template);
      }

      return null;
    });

    getCleaning();
    writeToJSON("Sched2.json", Sched);
    writeToJSON("output.json", globalList);
  });


// Temporal auxiliar functions
function getTemplate() {
  return {
    "id": 0,
    "codigo": "",
    "asignatura": "",
    "cr": 0,
    "ht": 0,
    "hp": 0,
    "hl": 0,
    "carrera": [],
    "profesores": [],
    "horariosYSalas": {
      "T": [],
      "P": []
    }
  };
};

function writeToJSON(name, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFile(name, json, (err) => {
    if (err) throw err;
    console.log(`${name} has been saved!`);
  });
}

function getCleaning() {
  // Execute commands from the terminal
  let cmd = "rm -rf Sched2.json output.json";
  const exec = require("child_process").exec;
  exec(cmd, (err, stdout, stderr) => {
    if (err) throw err;
  });
}
