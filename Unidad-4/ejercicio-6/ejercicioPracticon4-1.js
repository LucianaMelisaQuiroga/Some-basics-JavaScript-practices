/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), document.write y alert (output por pantalla). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*6. Hacer un programa para obtener las comisiones por ventas de un vendedor. Los datos que se ingresan son 
monto vendido y código de vendedor. Si el código de vendedor es menor a 100 las comisiones son de un 30%, 
si el código está entre 100 y 200 son del 20%, y si es mayor a 200 10%. Mostrar el código de vendedor, 
el monto vendido y el valor de las comisiones.*/ 

var montoVendido = Number(prompt("Ingrese el monto vendido: "));
var codigoVendedor = parseInt(prompt("Ingrese el código de vendedor: ")); 
var comisiones; 

//si se ingresan valores numéricos y positivos
if (codigoVendedor >= 1 && montoVendido > 0) {
    if (codigoVendedor < 100) { 
        //bloque si código de vendedor es menor a 100 con comisiones de 30% sobre el monto vendido

        comisiones = 30; 
        comisiones = montoVendido*(comisiones/100);
    } else if (codigoVendedor >= 100 && codigoVendedor <= 200) {
        //bloque si código de vendedor es entre 100 y 200 inclusive con comisiones de 20% sobre el monto vendido

        comisiones = 20; 
        comisiones = montoVendido * (comisiones/100);
    } else {
        //bloque si código de vendedor es mayor a 200 con comisiones de 10% sobre el monto vendido

        comisiones = 10;
        comisiones = montoVendido * (comisiones/100); 
    } 
} else {
    //bloque de código si se ingresan valores no numéricos y/o negativos

    alert("ERROR - Por favor, ingrese valores numéricos y positivos");   
}

document.write("El código de vendedor es: " + codigoVendedor + ", el monto vendido: $" 
        + montoVendido.toFixed(2) + ", el valor de las comisiones es por $" + comisiones.toFixed(2)); 


//otra forma de hacerlo

//si se ingresan valores numéricos y positivos
if (codigoVendedor >= 1 && montoVendido > 0) {
    if (codigoVendedor > 200) {
        //bloque si código de vendedor es mayor a 200 con comisiones de 10% sobre el monto vendido

        comisiones = 10;
        comisiones = montoVendido*(comisiones/100);
    } else if (codigoVendedor >= 100) {
        //bloque si código de vendedor es entre 100 y 200 inclusive con comisiones de 20% sobre el monto vendido

        comisiones = 20;
        comisiones = montoVendido*(comisiones/100);
    } else {
        //bloque si código de vendedor es menor a 100 con comisiones de 30% sobre el monto vendido

        comisiones = 30; 
        comisiones = montoVendido*(comisiones/100);
    }
} else {
    //bloque de código si se ingresan valores no numéricos y/o negativos

    alert("ERROR - Por favor, ingrese valores numéricos y positivos");
} 

document.write("El código de vendedor es: " + codigoVendedor + ", el monto vendido: $" 
        + montoVendido.toFixed(2) + ", el valor de las comisiones es por $" + comisiones.toFixed(2)); 