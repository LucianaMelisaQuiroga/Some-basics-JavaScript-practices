/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

//1) y 2) Respondido en HTML.

/*3) Realizar los siguientes problemas:
a) Realizar un Programa en JavaScript que resuelva los siguientes problemas 
(los valores deben ser asignados por ustedes):
superficie de un rectángulo
superficie de un triángulo
superficie de un círculo*/ 

//calculadora de superficie en cm2 para figuras geométricas

let figuraGeometrica = parseInt(prompt("Ingrese la figura por la que necesita calcular la superficie: 1 para Rectángulo, 2 para Triángulo o 3 para Círculo:"));  

if (figuraGeometrica === 1) { 
    //bloque de código si la superficie a calcular es de un rectángulo en cm2
    alert("Usted seleccionó Rectángulo");

    let baseRectangulo = parseFloat(prompt("Ingrese el valor de la base del rectángulo:"));
    let alturaRectangulo = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));

    alert("La superficie del rectángulo es: " + (baseRectangulo*alturaRectangulo) + " cm2");
} else if (figuraGeometrica === 2) {
    //bloque de código si la superficie a calcular es de un triángulo en cm2 
    alert("Usted seleccionó Triángulo");

    let baseTriangulo = parseFloat(prompt("Ingrese el valor de la base del triángulo:"));
    let alturaTriangulo = parseFloat(prompt("Ingrese el valor de la altura del triángulo:"));

    alert("La superficie del triángulo es: " + ((baseTriangulo*alturaTriangulo) / 2) + " cm2");
} else if (figuraGeometrica === 3) {
    //bloque de código si la superficie a calcular es de un círculo en cm2
    alert("Usted seleccionó Círculo");

    const PI = 3.14; 
    let radio = parseFloat(prompt("Ingrese el valor del radio del círculo:"));

    alert("La superficie del círculo es: " + (PI*(radio**2)) + " cm2");
} else { 
    //bloque de código si se ingresa un valor diferente al definir la figura geométrica 

    alert("ERROR - Usted no seleccionó correctamente la figura geométrica"); 
} 

/*b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. 
Mostrar los resultados.*/

//input usuario e impresión de resultado de las operaciones por pantalla
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));  

alert("El producto de los números ingresados es " + (num1*num2*num3) + " , la suma es " + (num1 + num2 + num3) + " , y el promedio es " + ((num1 + num2 + num3) / 3)); 

/*c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un 
cliente desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 
5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento 
aplicado más el total final*/

let remera = 2500;
let jean = 7000; 
let gorra = 1700;
let mochila = 6600;
let zapatilla = 25700; 
let totalCompra = remera + jean + gorra + mochila + zapatilla;
const DESCUENTO = (15/100); 

alert("El descuento aplicado del 15% sobre el total de la compra es $" + (totalCompra*DESCUENTO) + " , y el total de la compra a pagar es $" + (totalCompra*(1 - DESCUENTO))); 

/*d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, 
asumiendo que la unidad cambiaria es un dato desconocido.*/

let pesosArg = parseFloat(prompt("Ingrese el monto en pesos que posee: "));
let dolarHoy = 114.50; // cotización dólar billete venta BNA hoy

alert("Los $" + pesosArg + " que usted posee al día de la fecha equivalen a " + (pesosArg/dolarHoy) + " dólares cuya cotización es " + "$" + dolarHoy);

/*e) Un  cliente realizó una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo 
que dado el importe de una factura calcular el valor correspondiente al IVA.*/ 

//discriminando el IVA de la factura total de compra
let montoTotalFactura = parseFloat(prompt("Ingrese el monto total de la factura: "));
const IVACOMPRAS = (21/100);

alert("El IVA que se pagó en la presente factura es por $" + (montoTotalFactura - (montoTotalFactura/(IVACOMPRAS + 1))));