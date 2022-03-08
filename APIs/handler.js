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
  "1 año:Aer-125 créd:Ele/Eln-70 cré:INF",
  "90 créditos",
  "Prerrequisitos",
  "Licenciatura"
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
          && !checkBooleanRegex(/\d{6}/g, item.str)) {
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
    
    const aux = { "row": [], "row2": [] };
    
    let pivot = 0, depto = 0, idCounter = null;
    let allocation = Sched[Object.keys(Sched)[depto]];
    globalList.map((item, index) => {
      if (item.includes("Código") || item.includes("Asignatura")) {
        depto += 1;
        idCounter = -1;

      } else if (checkBooleanRegex(/\d{6}-\d/g, item)) {
        const template = getTemplate();
        idCounter += 1;
        pivot = index;
        depto += 1;

        template.id = idCounter;
        template.codigo = item;

        if (globalList[pivot + 1] === " ")
          template.asignatura = globalList[pivot + 2];
          pivot += 2;

        template.cr = parseInt(globalList[pivot + 2]);
        pivot += 2;

        template.ht = parseInt(globalList[pivot + 2]);
        pivot += 2;

        template.hp = parseInt(globalList[pivot + 2]);
        pivot += 2;

        template.hl = parseInt(globalList[pivot + 2]);
        pivot += 2;

        template.carrera = globalList[pivot + 2].split("/");
        pivot += 2;

        template.profesores = globalList[pivot + 2].split("-");
        Sched[Object.keys(Sched)[depto]][idCounter] = template;
      }

      return null;
    });

    // Execute commands from the terminal
    let cmd = "rm -rf Sched2.json; rm -rf output.json";
    const exec = require("child_process").exec;
    exec(cmd, (err, stdout, stderr) => {
      if (err) throw err;
    });

    fs.writeFile("Sched2.json", JSON.stringify(Sched, null, 2), (err) => {
      if (err) throw err;
      console.log("Sched2.json has been saved!");
    });

    const json = JSON.stringify(globalList, null, 2);
    fs.writeFile("output.json", json, function (err) {
      if (err) throw err;
      console.log("output.json has been saved!");
    });
  });


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
