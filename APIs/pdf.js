const globalList = [];
const unwantedItems = [
  "SECRETARÍA ACADÉMICA",
  "FACULTAD DE INGENIERÍA",
  "Departamento de Ingeniería Civil",
  "Autoriza DICIV",
  "1 año:Aer-125 créd:Ele/Eln-70 cré:INF"
];

const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const pdfPath = process.argv[2] || "./Test.pdf";
const loadingTask = pdfjsLib.getDocument(pdfPath);
loadingTask.promise
  .then(function (doc) {
    const numPages = doc.numPages;
    console.log("# Document Loaded");
    console.log();

    let lastPromise; // will be used to chain promises
    lastPromise = doc.getMetadata().then(function (data) {
      console.log("# Metadata Is Loaded");
    });

    const loadPage = function (pageNum) {
      return doc.getPage(pageNum).then(function (page) {
        return page
          .getTextContent()
          .then(function (content) {
            const strings = content.items.map(function (item) {
              globalList.push(item.str);
              return item.str;
            });
            console.log("## Text Content");
            console.log(strings.join(" "));
            page.cleanup();
          })
          .then(function () {
            console.log();
          });
      });
    };
    // Loading of the first page will wait on metadata and subsequent loadings
    // will wait on the previous pages.
    for (let i = 1; i <= numPages; i++) {
      lastPromise = lastPromise.then(loadPage.bind(null, i));
    }

    return lastPromise;
  })

  .then(
    function () {
      console.log("# End of Document");

      console.log("Global list: ");
      // Remove items from the globalList if they are in the unwantedItems array
      unwantedItems.forEach(item => {
        globalList.forEach((element, index) => {
          if (element.includes(item)) {
            globalList.splice(index, 1);
          }
        });
      });


      
      globalList.map((item, i) => {
        return console.log(i, item);
      });
    },
    function (err) {
      console.error("Error: " + err);
    }
  );


// Write the document text into a CSV file.
// const fs = require("fs");
// const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: "./Test.csv",
//   header: [
//     { id: "#", title: "#" },
//     { id: "codigo", title: "Codigo" },
//     { id: "asignatura", title: "Asignatura" },
//     { id: "cr", title: "CR" },
//     { id: "ht", title: "HT" },
//     { id: "hp", title: "HP" },
//     { id: "hl", title: "HL" },
//     { id: "carrera", title: "Carrera" },
//     { id: "profesores", title: "Profesor(es)" },
//     { id: "horariosysalas", title: "Horarios y Salas" }
//   ]
// });
