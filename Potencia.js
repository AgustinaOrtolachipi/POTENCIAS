"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        return base * calcularPotencia(base, exponente - 1);
    }
}
var base = readlineSync.questionInt('Ingrese la base: ');
var exponente = readlineSync.questionInt('Ingrese el exponente: ');
if (exponente >= 0) {
    var potencia = calcularPotencia(base, exponente);
    console.log("El resultado de ".concat(base, " elevado a la ").concat(exponente, " es ").concat(potencia));
}
else {
    console.log('El exponente debe ser mayor o igual a cero.');
}
