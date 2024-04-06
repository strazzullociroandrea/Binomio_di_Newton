const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const {calcolaGenerale} = require("./binomioNewton.cjs");
const generaTriangoloTartaglia = require("./tartaglia.js");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);


app.use("/", express.static(path.join(__dirname, "public")));

app.post("/calcola", async(request, response) => {
  let { esponente } = request.body;
  if(esponente !== "" && esponente){
    esponente = parseInt(esponente);
    const newton = await calcolaGenerale(esponente);
    const tartaglia = await  generaTriangoloTartaglia(esponente);
    response.json({ 
      result: {
        newton: newton,
        tartaglia: tartaglia
      } 
    });
  }
});


const server = http.createServer(app);
server.listen(10300, () => {
  console.log("       ---> server running");
});
