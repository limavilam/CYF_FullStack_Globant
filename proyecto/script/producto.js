//Ejercicio 1.

// Espera a que el DOM esté cargado

document.addEventListener("DOMContentLoaded", function() {
  
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
  
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
  
    // Mostrar resultados en el elemento con id "mensaje"
    mensajeElement.textContent = "Producto: " + producto + 
    "\nCantidad en stock después de la venta: " + cantidadProducto + 
    "\nMáximo permitido en el inventario: " + maximoInventario;
  });
  