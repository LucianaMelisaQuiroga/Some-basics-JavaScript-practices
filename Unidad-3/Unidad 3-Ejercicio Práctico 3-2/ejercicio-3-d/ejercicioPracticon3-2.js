/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

/*3-d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, 
asumiendo que la unidad cambiaria es un dato desconocido.*/

var pesosArg = Number(prompt("Ingrese el monto en pesos que posee: "));
var dolarHoy = 114.50; // cotización dólar billete venta BNA hoy

alert("Los $" + pesosArg + " que usted posee al día de la fecha equivalen a U$D" + (pesosArg/dolarHoy).toFixed(2)
    + ", cuya cotización del dólar billete precio venta BNA hoy es $" + dolarHoy.toFixed(2));