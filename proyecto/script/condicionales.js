// Espera a que el DOM esté cargado

document.addEventListener("DOMContentLoaded", function() {
  
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensajeCalificaciones");
  
   
    var calificacionMateria = prompt("Ingresa la calificación de la asignatura:");

    var calificacionMateriaConvertida = parseFloat(calificacionMateria); 
   
    

    if (calificacionMateriaConvertida >=70){

        console.log("Felicidades, ¡aprobaste el examen!");
        alert("Felicidades, ¡aprobaste el examen!");

    } else {

        console.log("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
        alert("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
    }   

});
  