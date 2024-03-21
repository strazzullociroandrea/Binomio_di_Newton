const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const calcoloCoefficiente = (n, k) => {
  return new Promise((resolve, reject) => {
    let result = 1;
    for (let i = 0; i < k; i++) {
      result *= n--;
    }
    // calcolo del fattoriale
    let fattoriale = 1;
    for (let i = 1; i <= k; i++) {
      fattoriale *= i;
    }
    result = result / fattoriale;
    resolve(result);
  });
};

const calcoloSingolo = async (n, k, a, b) => {
  let result = await calcoloCoefficiente(n, k);
  result = parseFloat(result) + a + b;
  return result.toString();
};

const calcolaGenerale = async (esponente) => {
  let result = "";

  for (let i = 0; i <= parseInt(esponente); i++) {
    let a = "a^" + (esponente - i);
    let b = i != 1 ? "b^" + i : "b";
    if (a === "a^1") {
      a = "a";
    }
    if (a === "a^0") {
      a = "";
    }
    if (b === "b^1") {
      b = "b";
    }
    if (b === "b^0") {
      b = "";
    }
    let rs = await calcoloSingolo(parseInt(esponente), i, a, b);
    if (i < parseInt(esponente)) {
      result += rs + " + ";
    } else {
      result += rs;
    }
  }
  return result;
};
const generaTriangoloTartaglia = (esponente, array = [[1], [1, 1]]) => {
  return new Promise((resolve,reject)=>{
    if (parseInt(esponente) === 1) {
      resolve(array.pop());
    } else if (parseInt(esponente) === 2) {
      resolve(array);
    } else if (parseInt(esponente) > 2) {
      for (let i = 2; i < esponente; i++) {
        const riga = [1];
        for (let j = 1; j < i; j++) {
          riga.push(array[i - 1][j - 1] + array[i - 1][j]);
        }
        riga.push(1);
        array.push(riga);
      }
      resolve(array);
    }
    resolve(undefined);
  });
  
};
app.use("/matematica", express.static(path.join(__dirname, "public")));

app.post("/matematica/calcola", (request, response) => {
  const { esponente } = request.body;
  calcolaGenerale(parseInt(esponente)).then((res) => {
    generaTriangoloTartaglia(esponente).then(tartaglia=>{
      response.json({ result: {res: res, tartaglia: tartaglia} });
    })
  });
});


const server = http.createServer(app);
server.listen(10300, () => {
  console.log("       ---> server running");
});
