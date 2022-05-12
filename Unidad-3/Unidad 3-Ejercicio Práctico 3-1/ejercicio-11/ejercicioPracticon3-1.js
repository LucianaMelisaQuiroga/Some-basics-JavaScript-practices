/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*11. Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el 
nombre del mes actual y el string 'Enero' son diferentes. Hacerlo usando el operador de desigualdad 
estricta (!==). Mostrar el valor de la variable por la terminal.*/

const MES_ENERO = "Enero"; 
var noEstamosEnEnero = "Marzo" !== MES_ENERO;

console.log(noEstamosEnEnero);