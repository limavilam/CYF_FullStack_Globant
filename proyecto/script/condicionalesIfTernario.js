document.addEventListener("DOMContentLoaded", function() {
  
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensajeCondicionalesIfTernario");
  
   
    var precioProducto = prompt("Ingrese el precio del producto:");

    var precioConversion = parseFloat(precioProducto);
    
    precioSiHayDescuento = (precioConversion > 1000) ? precioConversion * 0.9: precioConversion;
   
    console.log("El precio final con descuento aplicado es: $" + precioSiHayDescuento.toFixed(2));
    alert("El precio final con descuento aplicado es: $" + precioSiHayDescuento.toFixed(2));

});