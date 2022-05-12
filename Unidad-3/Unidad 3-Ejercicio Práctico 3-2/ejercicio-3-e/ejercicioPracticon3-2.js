/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

/*3-e) Un  cliente realizó una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo 
que dado el importe de una factura calcular el valor correspondiente al IVA.*/ 

//total de compra neto de iva 
var montoFacturaNetoIva = parseFloat(prompt("Ingrese el monto total de la factura: "));
const IVA_COMPRAS = 21;

//iva a pagar en la factura
alert("El IVA a pagar en la presente factura es por $" + (montoFacturaNetoIva*(IVA_COMPRAS/100)).toFixed(2));