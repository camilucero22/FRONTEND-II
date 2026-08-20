// PASO 1: seleccionar el input de nombre, el input de edad,
// el botón y el contenedor del resultado.

const botonVerificar = document.querySelector("#verificar"); 
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");

//    <input id="nombre" type="text">
//        <input id="edad" type="number" min="1">


botonVerificar.addEventListener("click", function(){
  console.log("Boton Andando")
  console.log (nombreInput.value.trim)
  //trim = corta los espacios vacios 
});


// PASO 2: crear la función crearMensaje(nombre, edad).
// Debe devolver un mensaje diferente según la edad.


// PASO 3: escuchar el evento click del botón.

// PASO 4: obtener el nombre y convertir la edad a Number.


// PASO 5: validar que el nombre no esté vacío y la edad sea mayor que cero.
// Si hay un error, mostrar el mensaje y detener la función con return.


// PASO 6: llamar a crearMensaje() y mostrar el resultado.

