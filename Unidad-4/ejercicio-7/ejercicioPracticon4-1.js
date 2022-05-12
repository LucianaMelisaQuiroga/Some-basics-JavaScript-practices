/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), console.log (output por consola). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*7. Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida 
por teclado.  1(Lunes) – 2(Martes) – 3(Miércoles) - 4(Jueves) - 5(Viernes) - 6(Sábado) – 7(Domingo)*/

var d = parseInt(prompt("Ingrese el número de día de la semana:\n"
                        + "1 para Lunes\n"
                        +"2 para Martes\n" 
                        + "3 para Miércoles\n" 
                        + "4 para Jueves\n" 
                        + "5 para Viernes\n" 
                        + "6 para Sábado\n" 
                        + "7 para Domingo"));

if (d >= 1 && d <= 7) {
    //bloques de código para valor ingresado dentro de un rango de 1 a 7 inclusive

    if (d == 1) {
        
        console.log("Lunes");
    } else if (d == 2) {

        console.log("Martes");
    } else if (d == 3) {

        console.log("Miércoles");
    } else if (d == 4) {

        console.log("Jueves");
    } else if (d == 5) {

        console.log("Viernes");
    } else if (d == 6) {

        console.log("Sábado");
    } else {

        console.log("Domingo");
    }
} else {
    //bloque de código para valores fuera de rango

    console.log("ERROR - Debe introducir sólo valores numéricos y dentro del rango del 1 al 7");
}


//otra forma de hacerlo usando switch 

var d = parseInt(prompt("Ingrese el número de día de la semana:\n"
                        + "1 para Lunes\n"
                        +"2 para Martes\n" 
                        + "3 para Miércoles\n" 
                        + "4 para Jueves\n" 
                        + "5 para Viernes\n" 
                        + "6 para Sábado\n" 
                        + "7 para Domingo"));

switch (d) {
    case 1: 
        
        console.log("Lunes");
        break;
    case 2: 

        console.log("Martes");
        break;
    case 3:

        console.log("Miércoles");
        break; 
    case 4: 

        console.log("Jueves");
        break;
    case 5:

        console.log("Viernes");
        break; 
    case 6: 

        console.log("Sábado");
        break; 
    case 7: 

        console.log("Domingo");
        break; 
    default:
        //bloque de código para valores fuera de rango

        console.log("ERROR - Debe introducir sólo valores numéricos y dentro del rango del 1 al 7");
        break;
}  