const botonVerificar = document.querySelector("#verificar");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const contenedorResultado = document.querySelector("#resultado");

// || or --> se debe cumplir una o la otra
// & and --> se deben cumplir las dos
// true && true ==> true 
// true && false ==> false 
// false && false ==> false 

//function sumar(a,b --> los datos que recibe)

function crearMensaje(nombre, edad) {
  if (edad >= 18) {
    return `Felicidades ${nombre}, podes entrar al evento`;
  } else {
    return `Lamentablemente ${nombre}, no podes ingresar`
  }
}

botonVerificar.addEventListener("click", function () {
  //trim = corta los espacios vacios 
  const nombreUsuario = nombreInput.value.trim();
  const edadUsuario = Number(edadInput.value);

  contenedorResultado.classList.remove("error", "exito");

  // === igualdad 
  if (nombreUsuario === "" || edadUsuario <= 0) {
    contenedorResultado.textContent = "Datos invalidos";
    contenedorResultado.classList.add("error");
    return;
  }

  contenedorResultado.textContent = crearMensaje(nombreUsuario, edadUsuario);
  contenedorResultado.classList.add("exito");

});
