/**
 * Modulo contenente le funzioni per generare il triangolo di tartaglia per risolvere (a+b)^n
 */
/**
 * Funzione per generare il triangolo di tartaglia
 * @param {*} esponente 
 * @param {*} array 
 * @returns 
 */
const generaTriangoloTartaglia = (esponente, array = [[1], [1, 1]]) => {
    return new Promise((resolve,reject)=>{
      if (parseInt(esponente) === 1) {
        resolve(array.pop());
      } else if (parseInt(esponente) === 2) {
        resolve(array);
      } else if (parseInt(esponente) > 2) {
        for (let i = 2; i <= esponente; i++) {
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
module.exports = generaTriangoloTartaglia;