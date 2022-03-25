/*Declaración y asignación de valores a variables. Trabajo con constantes. 
Operaciones aritméticas (tanto numéricas, como para concatenar), y operaciones de relación. 
Código Js externo al archivo HTML.*/

/*1. Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de 
la variable por la terminal.*/ 

let noValgoNi5 = 4;
console.log(noValgoNi5);

/*2. Declarar 3 variables:
-miAnioDeNacimiento y asignarle el valor de tu año de nacimiento.
-meGustariaTener80Anios y asignarle el número 80.
-voyATener80ElAnio y asignarle el resultado de sumar las 2 variables anteriores.
Mostrar por la terminal el año en el que vas a cumplir 80 años.*/ 

let miAnioDeNacimiento = 1985; 
const MEGUSTARIATENER80ANIOS = 80; 

let voyATener80ElAnio = miAnioDeNacimiento + MEGUSTARIATENER80ANIOS; 
console.log("Voy a cumplir 80 de edad en el año " + voyATener80ElAnio);

/*3. Declarar 3 variables:
-variable costoDeUnaTele y asignarle el valor 10000.
-variable ahorros y asignarle el valor 9000.
-variable dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.
Mostrar por la terminal cuanto dinero te falta para comprar la tele.*/ 

let costoDeUnaTele = 10000;
let ahorros = 9000; 

let dineroQueMeFalta = costoDeUnaTele - ahorros; 
console.log("Me falta para comprar una tv " + dineroQueMeFalta + " pesos");

/*4. Declarar 3 variables:
-diasPorAnio y asignarle el número 365
-cantidadDeAniosEnUnaDecada y asignarle el número 10
-cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.
Mostrar por la terminal cuantos días hay en una década.*/ 

const DIAS_POR_ANIO = 365; 
const CANTIDAD_DE_ANIOS_EN_UNA_DECADA = 10; 

const CANTIDAD_DE_DIAS_EN_UNA_DECADA = DIAS_POR_ANIO * CANTIDAD_DE_ANIOS_EN_UNA_DECADA; 
console.log("En una década hay " + CANTIDAD_DE_DIAS_EN_UNA_DECADA + " días");

/*5. Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas 
tengo en la mesa si conté 24 porciones.*/

//creando una variable para alojar el resultado.

const PORCIONES_POR_PIZZA = 8; 
let porcionesTotales = 24; 

let pizzasTotales = porcionesTotales/PORCIONES_POR_PIZZA; 
console.log("En la mesa hay " +  pizzasTotales + " pizzas"); 

//sin crear una variable para alojar el resultado.

console.log("En la mesa hay " +  porcionesTotales/PORCIONES_POR_PIZZA + " pizzas");

/*6. Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente 
el animal que más te gusta. Escribir el código necesario para mostrar por la terminal el valor true si el 
animal que más te gusta es un 'perro'. De lo contrario, mostrar false. Usar el operador de igualdad (==).*/  

const ANIMAL = "perro"; 

let miAnimalFavorito = "ballena"; 
console.log(miAnimalFavorito == ANIMAL); 

/*7. Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena
de caracteres 'flan' y 'flan con dulce de leche' (Podés crear todas las variables que quieras, incluso 
podés resolverlo sin usar variables).*/  

//sin usar variables.

console.log('flan' != 'flan con dulce de leche');
//con variables: 

let postreA = "flan";
let postreB = "flan con dulce de leche"; 

let postreCoincide = postreA != postreB; 
console.log(postreCoincide); 

//otra opción con variables, pero sin alojar el resultado en una variable.

console.log(postreA != postreB);

/*8. Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad y el 
número 17 usando el operador > (mayor). Mostrar el valor de la variable por la terminal.*/ 

const TENGO_DIESISIETE = 17;
var soyMayorDeEdad = 36; 

soyMayorDeEdad = soyMayorDeEdad > TENGO_DIESISIETE; 
console.log(soyMayorDeEdad); 

/*9. Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad y el número 
25 usando el operador < (menor). Mostrar el valor de la variable por la terminal.*/  

const TENGO_VEINTICINCO = 25;
var soyMenorDe25 = 36;

soyMenorDe25 = soyMenorDe25 < TENGO_VEINTICINCO; 
console.log(soyMenorDe25); 

/*10. Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre 
del mes actual es igual a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). Mostrar el 
valor de la variable por la terminal.*/ 

const MES_ENERO = "Enero";

let estamosEnEnero = "Marzo" === MES_ENERO; 
console.log(estamosEnEnero);

/*11. Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el 
nombre del mes actual y el string 'Enero' son diferentes. Hacerlo usando el operador de desigualdad 
estricta (!==). Mostrar el valor de la variable por la terminal.*/

//const MES_ENERO = "Enero"; //No la vuelvo a declarar ya que lo hice en el ejercicio anterior. 

let noEstamosEnEnero = "Marzo" !== MES_ENERO;  
console.log(noEstamosEnEnero); 

/*12. Declarar 3 variables:
-miNotaEnElParcial y asignarle un 8
-notaMinimaParaAprobar y asignarle un 6
-estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando 
-el operador >=(Mayor o igual). Mostrar el valor de la variable estoyAprobado por la terminal.*/ 

let miNotaEnElParcial = 8; 

const NOTA_MINIMA_PARA_APROBAR = 6; 

let estoyAprobado = miNotaEnElParcial >= NOTA_MINIMA_PARA_APROBAR; 
console.log(estoyAprobado); 

/*13. Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar con el 
operador <= (Menor o igual =) si la hora actual es menor o igual a 12. Mostrar el valor por la terminal.*/ 

const MEDIODIA = 12; 

let esHoraDeAlmorzar = 20 <= MEDIODIA; 
console.log(esHoraDeAlmorzar); 