// 1. Crear obtenerTipoEntrada(nombre, edad).
// Usar if, else if y else para devolver:
// - descuento para menores, si tiene menos de 18 años;
// - entrada general, si tiene entre 18 y 64 años;
// - descuento para jubilados, si tiene 65 años o más.

function obtenerTipoEntrada(nombre, edad, estudiante) {
  if (edad < 18) {
    return `Felicidades ${nombre}, tienes un descuento para menores`; //backtick
  } else if (edad >= 65) {
    return `Felicidades ${nombre}, tienes un descuento para jubilados`;
  } else if (edad >= 18 && edad < 65 && estudiante === true) {
    return `Felicidades ${nombre}, tienes un descuento para estudiantes`;
  } else {
    return `Felicidades ${nombre}, tienes una entrada general`;
  }
}
// < 18 
// > 65 

const calcularDescuento = document.querySelector("#calcular");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const botonResultado = document.querySelector("#resultado");
const estudianteInput = document.querySelector("#estudiante"); 


calcularDescuento.addEventListener("click", function () {
  botonResultado.classList.remove("error"); 

  // 2. Obtener el nombre y la edad ingresados.
  const nombreUsuario = nombreInput.value.trim();
  const edadUsuario = Number(edadInput.value);
  const descuentoEstudiante = estudianteInput.checked; 

  if (nombreUsuario === "" || edadUsuario <= 0) {
    botonResultado.classList.add("error"); 
    botonResultado.textContent = "Datos inválidos"
    return;
  }

  botonResultado.textContent = obtenerTipoEntrada(nombreUsuario, edadUsuario, descuentoEstudiante)

});
