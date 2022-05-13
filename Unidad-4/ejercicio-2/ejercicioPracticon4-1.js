/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), document.write y alert (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*2. Realizar un programa que determine si un número es par o impar*/ 

//validando datos 
var numeroIngresado = Number(prompt("Ingrese un número: ")); 

if (numeroIngresado % 2 == 0) {
    //bloque de código si el número es par 

    document.write("El número " + numeroIngresado + " es par");
} else if (Number.isNaN(numeroIngresado) == true) {
    //bloque de código si se ingresa un valor no numérico

    alert("ERROR - Ingrese un valor numérico");
} else {
    //bloque de código si el número es impar 
        
     document.write("El número " + numeroIngresado + " es impar");
} 
