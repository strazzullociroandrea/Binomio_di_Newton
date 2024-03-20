const invia = document.getElementById("invia");
const esponente = document.getElementById("esponente");
const risultato = document.getElementById("risultato");

invia.onclick = () => {
  if (esponente.value === "" || esponente.value < 0 || esponente.value > 9) {
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
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      esponente.value = "";
      let data = "";
      const result = response.result;
      let isExponent = false;
      for (let i = 0; i < result.length; i++) {
        if (result[i] === "^") {
          isExponent = true;
          data += "<sup>";
        } else if (isExponent) {
          data += result[i] + "</sup>";
          isExponent = false;
        } else if (
          result[i] === "1" &&
          (result[i + 1] === "a" || result[i + 1] === "b")
        ) {
          data += result[i + 1];
          i++;
        } else {
          data += result[i];
        }
      }
      risultato.innerHTML = data;
    });
};
