const invia = document.getElementById("invia");
const esponente = document.getElementById("esponente");
const risultato = document.getElementById("risultato");
const tartaglia = document.getElementById("tartaglia");
  
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
      //generazione view risultato
      let data = "";
      const {res,tartaglia} = response.result;
      let isExponent = false;
      for (let i = 0; i < res.length; i++) {
        if (res[i] === "^") {
          isExponent = true;
          data += "<sup>";
        } else if (isExponent) {
          data += res[i] + "</sup>";
          isExponent = false;
        } else if (
          res[i] === "1" &&
          (res[i + 1] === "a" || res[i + 1] === "b")
        ) {
          data += res[i + 1];
          i++;
        } else {
          data += res[i];
        }
      }
      risultato.innerHTML = data;
      //generazione view tartaglia
      let tar = "";
      tartaglia.forEach(riga=>{
        tar += "<div>";
        riga.forEach(element=>{
          tar += "<p>"+element+"</p>";
        })
        tar += "</div>"
      })
      tartaglia.innerHTML = tar;
    });
};
