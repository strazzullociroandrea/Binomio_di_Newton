/**
 * Funzione per inviare al server l'esponente per calcolare il binomio di Newton e il triangolo di tartaglia
 * @param {*} esponente 
 * @returns 
 */
export const calcola = async(esponente) =>{
    let resp = await fetch("/calcola", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          esponente: esponente,
        }),
      });
    resp = await resp.json();
    return resp.result;
}