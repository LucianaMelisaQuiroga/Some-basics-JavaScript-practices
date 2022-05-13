/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), alert (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*9. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un 
programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando 
el descuento si es necesario.*/

var compra = Number(prompt("Ingrese el monto de la compra: ")); 
const DESCUENTO = 15; 
var montoTotalCompra;

if (compra > 100) {
    //bloque de código para compras superiores a $100,00 
    
    montoTotalCompra = compra*(1-(DESCUENTO/100));
} else {
    //bloque de código para compras iguales o menores a $100,00

    montoTotalCompra = compra; 
}

document.write("El monto total a pagar por la compra es $" + montoTotalCompra.toFixed(2));
