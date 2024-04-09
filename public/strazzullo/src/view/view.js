import {modella} from "../model/model.js";
const risultatoNewton = document.getElementById("risultato");
const risultatoTartaglia = document.getElementById("tartaglia");

const tr = "<tr>%INFO</tr>";
const td = "<td>%INFO</td>";
/**
 * Funzione per visualizzare in finestra i vari risultati dei calcoli
 * @param {*} esponente 
 */
export const visualizza = async(esponente) =>{
    const {newton,tartaglia} = await modella(esponente);
    risultatoNewton.innerHTML =  newton.replace(/\^(\d+)/g, "<sup>$1</sup>");
    if(tartaglia){
        let html = "";
        tartaglia.forEach(res =>{
            let tdt = "";
            if(res.length > 0){
                res.forEach(ris =>{
                    tdt += td.replace("%INFO",ris);
                })
            }
            html += tr.replace("%INFO",tdt);
        });
        risultatoTartaglia.innerHTML = html;
    }else{
        risultatoTartaglia.innerHTML = "<p class='text-danger'>Impossibile calcolarlo</p>";
    }
    
}