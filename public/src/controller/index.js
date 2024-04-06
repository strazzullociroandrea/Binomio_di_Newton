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
};
