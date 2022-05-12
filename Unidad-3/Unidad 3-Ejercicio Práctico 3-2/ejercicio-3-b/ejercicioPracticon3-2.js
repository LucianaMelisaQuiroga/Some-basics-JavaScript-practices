/*Declaración y asignación de valores a variables, trabajo con CONSTANTES, prompt (input de usuario), 
alert (output por pantalla). Operaciones aritméticas (tanto numéricas, como concatenación) y relacionales. 
Código Js externo al archivo HTML.*/

/*3-b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. 
Mostrar los resultados.*/

//input usuario e impresión de resultado de las operaciones por pantalla. Redondeo a 2 decimales para valores flotantes 
var num1 = Number(prompt("Ingrese el primer número: "));
var num2 = Number(prompt("Ingrese el segundo número: "));
var num3 = Number(prompt("Ingrese el tercer número: "));  

alert("El producto de los números ingresados es " + (num1*num2*num3).toFixed(2) + " , la suma es " + (num1+num2+num3).toFixed(2) + " , y el promedio es " + ((num1+num2+num3)/3).toFixed(2));