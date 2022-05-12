/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), document.write (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*1. Realiza un programa para obtener el menor de 2 números ingresados*/ 

var numeroUno = Number(prompt("Ingrese el primer número: ")); 
var numeroDos = Number(prompt("Ingrese el segundo número: "));  

if (numeroUno < numeroDos) {
    //bloque de código si el primer número es menor

    document.write("El número menor es " + numeroUno);
} else if (numeroUno > numeroDos) {
    //bloque de código si el segundo número es menor

    document.write("El número menor es " + numeroDos);
} else if (numeroUno == numeroDos) {
    //bloque de código si ambos números son iguales

    document.write("Ambos números son iguales"); 
} else {
    //bloque de código si se ingresa cualquier caracter no numérico

    document.write("ERROR - Usted no ingresó un valor numérico");
}