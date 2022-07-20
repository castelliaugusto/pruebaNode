let sumar = (a, b) => a + b;
let restar = (c, d) => c - d;
let multiplicar = (e, f) => e * f;
let dividir = (g, h) => g / h;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(50, 25, dividir));

let numeros = [1, 2, 3, 4];
function agregarHttp(numeros) {
    return numeros.unshift('http://');
}
console.log(agregarHttp("www.google.com"));