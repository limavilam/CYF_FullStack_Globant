//Ejercicio 1.

// Espera a que el DOM esté cargado

//document.addEventListener("DOMContentLoaded", function() {
  
// Obtén la referencia al elemento <p> con el id "mensaje"
  
  //let mensajeElement = document.getElementById("mensaje");

  // Cambia el contenido del elemento <p>
  
  //mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
//});

// Ejercicio2: Actividad JavaScript Entrada y Salida de datos con 

// Mostrar mensaje en la consola
console.log("¡Hola! Estás imprimiendo un mensaje por consola");

//Se muestra en el navegador graficamente
//alert("¡Hola! Estás imprimiendo un mensaje por consola");

// Agregar interacción con el usuario
document.addEventListener('DOMContentLoaded', function() {
    // Hacer clic en un botón para activar el prompt
    var botonPrompt = document.getElementById('botonPrompt');

    // Declarar variable 'producto'
var producto = "Camiseta";

// Declarar variable 'cantidadProducto'
var cantidadProducto = 50; // Por ejemplo, inicialmente hay 50 camisetas en stock

// Simular una venta reduciendo la cantidad de productos vendidos
var cantidadVenta = 5; // Por ejemplo, se vendieron 5 camisetas
cantidadProducto -= cantidadVenta;

// Definir una variable 'maximoInventario'
var maximoInventario = 100; // Por ejemplo, el máximo de camisetas permitido en el inventario es 100

// Mostrar resultados en la consola
console.log("Producto: " + producto);
console.log("Cantidad en stock después de la venta: " + cantidadProducto);
console.log("Máximo permitido en el inventario: " + maximoInventario);


    if (botonPrompt) {
        botonPrompt.addEventListener('click', function() {
            var usuario = prompt("Ingresa tu nombre:"); //Lo que sale cuando le doy click 
            var anioNacimiento = prompt ("Ingresa el año de nacimiento")

            //Calcular la edad del usuario

            var anioActual = new Date().getFullYear();
            var edadActual = anioActual - parseInt(anioNacimiento);


            //(condición) ? valorSiVerdadero : valorSiFalso;
            //(usuario ? usuario : "Usuario") , esta expresión se utiliza para asegurarse de que haya un valor válido para mostrar en el mensaje.
            console.log("Hola, " + (usuario ? usuario : "Usuario") + "! Bienvenido al mundo de JavaScript.");
            console.log("Usuario, tienes" + (edadActual ? edadActual : "años") )

            //Muestra ventana emergente 
            alert("Hola, " + (usuario ? usuario : "Usuario") + "! Bienvenido al mundo de JavaScript.");
            alert("Usuario, tienes " + (edadActual ? edadActual : "años") + " años" )
        });
    }
});

