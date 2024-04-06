/**
 * Modulo contenente le funzioni utili per il calcolo di (a+b)^n con il metodo di Newton
 */
/**
 * Funzione per calcolare il coefficiente binomiale
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
const calcoloCoefficiente = (n, k) => {
    return new Promise((resolve, reject) => {
        let coefficiente = 1;
        for (let i = 0; i < k; i++) {
            coefficiente *= (n - i) / (i + 1);
        }
        resolve(coefficiente);
    });
};

/**
 * Funzione per calcolare i singoli coefficienti
 * @param {*} n 
 * @param {*} k 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const calcoloSingolo = async (n, k, a, b) => {
    let result = await calcoloCoefficiente(n, k);
    result = parseFloat(result) + a + b;
    return result.toString();
  };

/**
 * Funzione per calcolare il risultato del binomio di Newton
 * @param {*} esponente 
 * @returns 
 */
const calcolaGenerale = async (esponente) => {
    let result = "";
    //ripetuto pre esponente!
    for (let i = 0; i <= parseInt(esponente); i++) {
      //calcolo i singoli esponenti di a e b
      let a = "a^" + (esponente - i);
      let b = i != 1 ? "b^" + i : "b";
      let rs = await calcoloSingolo(parseInt(esponente), i, a, b);
      if (i < parseInt(esponente)) {
        result += rs + " + ";
      } else {
        result += rs;
      }
    }
    return result;
  };

  module.exports = calcolaGenerale;