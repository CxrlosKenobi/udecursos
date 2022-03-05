const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const fs = require("fs");


const globalList = [];
const unwantedItems = [
  "SECRETARÍA ACADÉMICA",
  "FACULTAD DE INGENIERÍA",
  "Departamento de Ingeniería Civil",
  "Autoriza DICIV",
  "Autoriza Depto.",
  "1 año:Aer-125 créd:Ele/Eln-70 cré:INF",
  "90 créditos"
];

const pdfPath = process.argv[2] || "./Test.pdf";
const loadingTask = pdfjsLib.getDocument(pdfPath);

loadingTask.promise
  .then((doc) => {
    const numPages = doc.numPages;
    console.log("# Document Loaded");

    let lastPromise; // will be used to chain promises
    lastPromise = doc.getMetadata().then((data) => {
      console.log("# Metadata Is Loaded");
    });

    const loadPage = function (pageNum) {
      return doc.getPage(pageNum).then((page) => {
        return page
          .getTextContent()

          .then((content) => {
            const strings = content.items.map((item) => {
              (!unwantedItems.includes(item.str)) && globalList.push(item.str);
              return item.str;
            });
            console.log("## Text Content");
            console.log(strings.join("|"));
            page.cleanup();
          })

          .then(() => console.log("# Page Cleaned Up"));
      });
    };

    for (let i = 1; i <= numPages; i++) {
      lastPromise = lastPromise.then(loadPage.bind(null, i));
    }

    return lastPromise;
  })

  .then(() => {
    console.log("# End of Document");
    console.log("Global list: ");

    globalList.map((item, i) => { return console.log(i, item) });

    const json = JSON.stringify(globalList, null, 2);
    fs.writeFile("output.json", json, function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });

  }, (e) => console.error("Error: " + e));
