/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*12. Declarar 3 variables:
-miNotaEnElParcial y asignarle un 8
-notaMinimaParaAprobar y asignarle un 6
-estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando 
-el operador >=(Mayor o igual). Mostrar el valor de la variable estoyAprobado por la terminal.*/ 

var miNotaEnElParcial = 8; 
const NOTA_MINIMA_PARA_APROBAR = 6; 

var estoyAprobado = miNotaEnElParcial >= NOTA_MINIMA_PARA_APROBAR; 
console.log(estoyAprobado);