/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

/*3-c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un 
cliente desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 
5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento 
aplicado más el total final*/

var remera = 2500;
var jean = 7000; 
var gorra = 1700.80;
var mochila = 6600.50;
var zapatilla = 25700; 
var totalCompra = remera + jean + gorra + mochila + zapatilla;
const DESCUENTO = 15; 

alert("El descuento aplicado es del " + DESCUENTO + "% sobre el total de la compra, y el total a pagar es $" 
    + (totalCompra*(1 - (DESCUENTO/100))).toFixed(2));