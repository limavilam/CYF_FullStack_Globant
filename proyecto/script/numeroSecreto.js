// Espera a que el DOM esté cargado

document.addEventListener("DOMContentLoaded", function() {
  
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensajeCodigo");
  
   
    var codigoDescuentoSecreto = "Mora123";
  
   
    var intentosCodigo = 0; 

    var codigoIngresado = prompt("Ingresa el código promocional:")
    intentosCodigo ++;
  
    const maxIntentosCodigo = 5; 

    if (codigoIngresado===codigoDescuentoSecreto){
        alert("¡Felicitaciones!, has ingresado el código correcto");
    } else {
        alert("¡Código incorrecto!. Número de intentos restantes: " + (maxIntentosCodigo-intentosCodigo));

        if (intentosCodigo >= maxIntentosCodigo){
            alertlin("Ya no tienes más intentos")
        }
    }   

  });
  