/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*7. Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena
de caracteres 'flan' y 'flan con dulce de leche' (Podés crear todas las variables que quieras, incluso 
podés resolverlo sin usar variables).*/  

//sin usar variables. 
console.log("flan" != "flan con dulce de leche");

//con variables: 
var postreA = "flan";
var postreB = "flan con dulce de leche"; 

var postreCoincide = postreA != postreB; 
console.log(postreCoincide); 

//otra opción con variables, pero sin alojar el resultado en una variable.
console.log(postreA != postreB);