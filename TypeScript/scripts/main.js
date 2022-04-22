import { series } from "./data.js";
var serieTable = document.getElementById("serie");
var promedios = document.getElementById("promedios");
function mostrarInfoSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<th scope =\"row\">".concat(serie.idSerie, "</th>\n    <td>").concat(serie.nombre, "</td>\n    <td>").concat(serie.canal, "</td>\n    <td>").concat(serie.temporadas, "</td>");
    serieTable.appendChild(tbodySerie);
}
function calcularPromedios() {
    var suma = 0;
    var cantidad = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.temporadas;
        cantidad++;
    }
    var promedio = suma / cantidad;
    var tPromedio = document.createElement("tr");
    tPromedio.innerHTML = "<tc><td>Seasons Average: </td><td>".concat(promedio, "</td></tc>");
    promedios.appendChild(tPromedio);
}
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    mostrarInfoSerie(serie);
}
calcularPromedios();
