/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), document.write (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*5. Realizar un programa que calcule el importe total a abonar en una factura, teniendo 
en cuenta que si el importe total supera los 1000$  se aplica un descuento del 20%.*/ 

var importeTotal = Number(prompt("Ingrese el importe total de la compra: "));

if (importeTotal > 1000) {
    //bloque de código si el importe total supera los 1000, el cual se factura con un 20% de descuento
    const DESCUENTO = 20; 
    
    document.write("El importe total de la factura es $" + (importeTotal*(1-(DESCUENTO/100))).toFixed(2));
} else {
    //bloque de código si el importe total es menor o igual a 1000 

    document.write("El importe total de la factura es $" + importeTotal.toFixed(2));
}