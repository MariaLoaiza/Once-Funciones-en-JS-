/*
        1. Crear una funcion que reciba 2 parámetros numéricos y devuelva la suma, 
        la funcion llámela suma.
*/

// Escriba la función debajo:

function suma(a, b) {
        return a + b;
}
 var resultado = suma(3, 5);
 console.log (resultado);
 
/* 
        2. Crear una función que imprima en pantalla un mensaje de bienvenida.
*/

// Escriba la función debajo:

function bienvenida(){
        console.log("Bienvenido")
}
bienvenida();


/* 
        3. Crear una función la cual se le pase un número y que retorne verdadero si es par,
         en caso contrario, devuelva falso.
*/

// Escriba la función debajo:

function pares (n){
        if (n%2==0) {
                return true
        }
        else {
                return false
        }
}
var par = pares(16);
console.log(par);

/* 
        4. Crear una función que permita saber si un numero es primo.
*/

// Escriba la función debajo:

function primos(a){
        var divisores = 0;
        for(let i = 1; i<=a; i++){
                if(a%i==0){
                        divisores = divisores
                }
        }
        if(divisores==2)
       { console.log ("es primo")}
       else{console.log("no es primo")}
}


/* 
        5. Crear una función que devuelva el area de un circulo, ingresando el radio.
*/

// Escriba la función debajo:

/* 
        6. Crear una función que pida un número y devuelva cuántos múltiplos de 3 hay, desde 1 hasta ese número.
*/

// Escriba la función debajo:

