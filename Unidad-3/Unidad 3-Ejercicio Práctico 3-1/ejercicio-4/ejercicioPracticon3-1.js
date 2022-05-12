/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*4. Declarar 3 variables:
-diasPorAnio y asignarle el número 365
-cantidadDeAniosEnUnaDecada y asignarle el número 10
-cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.
Mostrar por la terminal cuantos días hay en una década.*/ 

const DIAS_POR_ANIO = 365; 
const CANTIDAD_DE_ANIOS_EN_UNA_DECADA = 10; 

const CANTIDAD_DE_DIAS_EN_UNA_DECADA = DIAS_POR_ANIO * CANTIDAD_DE_ANIOS_EN_UNA_DECADA; 
console.log("En una década hay " + CANTIDAD_DE_DIAS_EN_UNA_DECADA + " días");