let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    fact: function(){
        return this.nombre + ' ' + this.apellido + ' es el mejor tenista de todos los tiempos';
    }
}
console.log(tenista.fact());

function Tenistas(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
let elMejor = new Tenistas('Roger Federer', 40);
let granTenista = new Tenistas('Rafael Nadal', 36);
console.log(elMejor);

let cantidadDeHoras = 0;
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadDeHoras){
        let energiaDisminuida = this.energia - (cantidadDeHoras * 5);
        let experienciaIncrementada = this.experiencia + (cantidadDeHoras * 2);
        //return [energiaDisminuida, experienciaIncrementada];
        console.log(energiaDisminuida);
        console.log(experienciaIncrementada);
    }
};
console.log(deportista.entrenarHoras(2));

//Objeto Date
let fechaActual = new Date();
//console.log(fechaActual);

let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

let miCumple = new Date(2003, 3, 28);
console.log(miCumple.getDate());
console.log(miCumple.getDay());
console.log(miCumple.getMonth());
console.log(miCumple.getFullYear());

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('Hoy es el ' + dia + ' de ' + meses[mes] + ' del ' + anio);