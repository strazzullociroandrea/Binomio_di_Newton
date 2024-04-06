import {calcola} from "../data/data.js";

/**
 * Funzione per modellare i dati per la corretta visualizzazione
 * @param {*} esponente 
 */
export const modella = async(esponente) =>{
    let {newton,tartaglia} = await calcola(esponente);
    newton = newton
    .replaceAll("a^0","")
    .replaceAll("b^0","")
    .replaceAll("a^1","a")
    .replaceAll("b^1","b")
    .replaceAll("1a","a")
    .replaceAll("1b","b")
    .replaceAll("a0","a")
    .replaceAll("b0","b");
    return {
        newton: newton,
        tartaglia: tartaglia
    }
}