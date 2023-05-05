import * as readlineSync from 'readline-sync';
function calcularPotencia(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  } else {
    return base * calcularPotencia(base, exponente - 1);
  }
}
const base = readlineSync.questionInt('Ingrese la base: ');
const exponente = readlineSync.questionInt('Ingrese el exponente: ');
if (exponente >= 0) {
  const potencia = calcularPotencia(base, exponente);
  console.log(`El resultado de ${base} elevado a la ${exponente} es ${potencia}`);
} else {
  console.log('El exponente debe ser mayor o igual a cero.');
}