import {Serie} from './serie.js';
import {series} from "./data.js";

let serieTable: HTMLElement = document.getElementById("serie")!;
let promedios: HTMLElement = document.getElementById("promedios")!;


function mostrarInfoSerie(serie: Serie): void
{
    let tbodySerie = document.createElement("tbody");

    tbodySerie.innerHTML = `<th scope ="row">${serie.idSerie}</th>
    <td>${serie.nombre}</td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>`;
    
    serieTable.appendChild(tbodySerie);
}

function calcularPromedios(): void{

    let suma: number = 0;
    let cantidad: number = 0;

    for (let serie of series)
    {
        suma += serie.temporadas;
        cantidad ++;
    }

    let promedio: number = suma/cantidad;

    let tPromedio = document.createElement("tr");

    tPromedio.innerHTML = `<tc><td>Seasons Average:  </td><td>${promedio}</td></tc>`
    promedios.appendChild(tPromedio);
}


for (let serie of series)
{
    mostrarInfoSerie(serie);
}

calcularPromedios();