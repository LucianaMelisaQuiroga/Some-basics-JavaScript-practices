/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), alert (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*8. Hacer un programa que calcule el pago que hace un grupo de personas para ver una película teniendo 
en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y para grupos de 8 
personas o más el pago es 0.5 pesos por persona.*/

var personasPorGrupo = parseInt(prompt("Ingrese la cantidad de personas con las que viene a ver la película: "));
var precioTotalEntradas;
var precioEntrada; 

if (personasPorGrupo < 8 && personasPorGrupo > 0) {
    //bloque de código para grupo de menos de 8 personas 

    precioEntrada = 1.5; 
    precioTotalEntradas = personasPorGrupo*precioEntrada;
} else {
    //bloque de código para grupo de 8 o más personas 

    precioEntrada = 0.5; 
    precioTotalEntradas = personasPorGrupo*precioEntrada;
}

document.write("El total a pagar por el grupo de " + personasPorGrupo + " para ver la película es U$D" + precioTotalEntradas.toFixed(2));
