const invia = document.getElementById("invia");
const esponente = document.getElementById("esponente");
const risultato = document.getElementById("risultato");
const tartagliaOutput = document.getElementById("tartaglia");

invia.onclick = () => {
  if (esponente.value === "" || esponente.value < 1 || esponente.value > 9 || isNaN(parseInt(esponente.value))) {
    esponente.style.borderColor = "red";
    return;
  } else {
    esponente.style.borderColor = "";
  }

  fetch("/matematica/calcola", {
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
      let data = response.result.res;
      risultato.innerHTML = data.replace(/\^(\d+)/g, "<sup>$1</sup>");

      // Generazione view tartaglia
      const tartaglia = response.result.tartaglia;
      let tartagliaHTML = "";
      tartaglia.forEach((row) => {
        tartagliaHTML += "<div>";
        row.forEach((element) => {
          tartagliaHTML += "<p>" + element + "</p>";
        });
        tartagliaHTML += "</div>";
      });
      tartagliaOutput.innerHTML = tartagliaHTML;
    })
    .catch((error) => console.error("Errore durante la richiesta:", error));
};
