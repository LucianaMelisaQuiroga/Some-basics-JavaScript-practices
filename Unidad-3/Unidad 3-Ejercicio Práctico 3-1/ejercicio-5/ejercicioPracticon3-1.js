/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*5. Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas 
tengo en la mesa si conté 24 porciones.*/

//creando una variable para alojar el resultado
const PORCIONES_POR_PIZZA = 8; 
var porcionesTotales = 24; 

var pizzasTotales = porcionesTotales/PORCIONES_POR_PIZZA; 
console.log("En la mesa hay " +  pizzasTotales + " pizzas"); 

//sin crear una variable para alojar el resultado
console.log("En la mesa hay " +  porcionesTotales/PORCIONES_POR_PIZZA + " pizzas");