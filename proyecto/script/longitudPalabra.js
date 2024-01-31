document.addEventListener("DOMContentLoaded", function() {
  
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("longitud");
  
   
    var palabra = "Morita";
    var palabraLongitud = prompt("Ingrese la palabra que desea saber la longitud:");

    var longitudDePalabra = palabra.length;
    var longitudDePalabraIngresada = palabraLongitud.length;
  
   
    console.log("Ejemplo de cómo se visualiza la longitud de la palabra" + palabra + "es:" + longitudDePalabra);
    alert("Ejemplo de cómo se visualiza la longitud de la palabra: " + longitudDePalabra)

    console.log("Longitud de la palabra ingresada: " + longitudDePalabraIngresada);
    alert("Longitud de la palabra ingresada: " + longitudDePalabraIngresada)

   
  });
  

//Ejercicio 3

// Suma
var num1 = 10;
var num2 = 5;
var suma = num1 + num2;
console.log("Suma:", suma);

// Resta
var resta1 = 15;
var resta2 = 7;
var restaResultado = resta1 - resta2;
console.log("Resta:", restaResultado);

// Multiplicación
var multiplicacion1 = 4;
var multiplicacion2 = 6;
var producto = multiplicacion1 * multiplicacion2;
console.log("Multiplicación:", producto);

// División
var division1 = 20;
var division2 = 4;
var cociente = division1 / division2;
console.log("División:", cociente);

// Resto de la división
var dividendo = 17;
var divisor = 5;
var resto = dividendo % divisor;
console.log("Resto de la división:", resto);

// Incremento
var valorInicial = 8;
var incremento = valorInicial + 1;
console.log("Incremento:", incremento);

// Decremento
var valorParaDecrementar = 12;
var decremento = valorParaDecrementar - 1;
console.log("Decremento:", decremento);

// Elevar al cuadrado
var base = 3;
var cuadrado = Math.pow(base, 2);
console.log("Cuadrado:", cuadrado);

// Redondeo
var valorDecimal = 7.89;
var redondeoEntero = Math.round(valorDecimal);
console.log("Redondeo a entero:", redondeoEntero);

// Número aleatorio en un rango específico
var numeroAleatorio = Math.floor(Math.random() * (50 - 20 + 1) + 20); // Número entre 20 y 50
console.log("Número aleatorio:", numeroAleatorio);
