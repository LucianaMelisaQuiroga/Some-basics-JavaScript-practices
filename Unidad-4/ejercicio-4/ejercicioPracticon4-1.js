/*Estructuras de control de flujo condicionales en Javascript. Declaración y asignación de valores a variables, 
trabajo con CONSTANTES, prompt (input de usuario), console.log (output por consola). Operaciones aritméticas 
(tanto numéricas, como concatenación), relacionales y lógicas. Código Js externo al archivo HTML.

/*4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. 
Mostrar por la consola uno de los siguientes mensajes según la posición que salió el corredor:

-'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.*/ 

var posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    //bloque de código si la posición es 1°

    console.log("'FELICITACIONES, SALISTE 1RO'"); 
} else if (posicionEnLaCarrera == 2) {
    //bloque de código si la posición es 2°

    console.log("'Te falto poquito para ganar'"); 
} else if (posicionEnLaCarrera == 3) {
    //bloque de código si la posición es 3°

    console.log("'Sos un orgullo para tu familia'"); 
} else if (posicionEnLaCarrera > 3) {
    //bloque de código si la posición es mayor de la 3°

    console.log("'Volvé a tu casa'"); 
} else {
    //bloque de código si se ingresa cualquier valor por fuera de los valores indicados  

    console.log("'No tires fruta'"); 
}