/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

/*3-a) Realizar un Programa en JavaScript que resuelva los siguientes problemas 
(los valores deben ser asignados por ustedes):
superficie de un rectángulo
superficie de un triángulo
superficie de un círculo*/ 

//calculadora de superficie en cm2 para figuras geométricas redondeado a 2 decimales
var figuraGeometrica = prompt("Ingrese la figura por la que necesita calcular la superficie:\n"
                            + "1 para Rectángulo,\n"
                            + "2 para Triángulo\n"
                            + "3 para Círculo\n"); 

switch (figuraGeometrica) {
    case "1": 
        //bloque de código si la superficie a calcular es de un rectángulo en cm2

        alert("Usted seleccionó Rectángulo");
        var baseRectangulo = Number(prompt("Ingrese el valor de la base del rectángulo: "));
        var alturaRectangulo = Number(prompt("Ingrese el valor de la altura del rectángulo: "));

        document.write("La superficie del rectángulo es: " + (baseRectangulo*alturaRectangulo).toFixed(2) + " cm2"); 
        break;

    case "2":
        //bloque de código si la superficie a calcular es de un triángulo en cm2 

        alert("Usted seleccionó Triángulo");
        var baseTriangulo = Number(prompt("Ingrese el valor de la base del triángulo: "));
        var alturaTriangulo = Number(prompt("Ingrese el valor de la altura del triángulo: "));

        document.write("La superficie del triángulo es: " + ((baseTriangulo*alturaTriangulo)/2).toFixed(2) + " cm2");
        break;

    case "3": 
        //bloque de código si la superficie a calcular es de un círculo en cm2

        alert("Usted seleccionó Círculo");
        const PI = 3.1415927; 
        var radio = Number(prompt("Ingrese el valor del radio del círculo: "));

        document.write("La superficie del círculo es: " + (PI*(radio**2)).toFixed(2) + " cm2");
        break; 
        
    default:
        //bloque de código si se ingresa un valor diferente al definir la figura geométrica 

        alert("ERROR - Usted no seleccionó correctamente la figura geométrica");
        break;
}