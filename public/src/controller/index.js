import {visualizza} from "../view/view.js";
const invia = document.getElementById("invia");
const esponente = document.getElementById("esponente");


invia.onclick = () => {
  if (esponente.value === "" || isNaN(parseInt(esponente.value))) {
    esponente.style.borderColor = "red";
  } else {
    esponente.style.borderColor = "";
    visualizza(esponente.value);
  }
  /*
  fetch("/calcola", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      esponente: esponente.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      esponente.value = "";
      // Generazione view risultato
      let data = response.result.newton;
      risultato.innerHTML = data.replace(/\^(\d+)/g, "<sup>$1</sup>");

      // Generazione view tartaglia
      const tartaglia = response.result.tartaglia;
      let tartagliaHTML = "";
      tartaglia.forEach((row) => {
        tartagliaHTML += "<div><p>";
        row.forEach((element,index) => {
          if(index < row.length-1)
            tartagliaHTML +=  element + " ";
          else 
            tartagliaHTML +=  element 
        });
        tartagliaHTML += "</p></div>";
      });
      tartagliaOutput.innerHTML = tartagliaHTML;
    })
    .catch((error) => console.error("Errore durante la richiesta:", error));
     */
};
