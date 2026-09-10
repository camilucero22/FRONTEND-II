const recomendaciones = [
  "El viaje de Chihiro",
  "Outer Wilds",
  "Black Mirror"
];

const formulario = document.querySelector("#formulario-recomendacion");
const inputRecomendacion = document.querySelector("#recomendacion");
const cartelera = document.querySelector("#cartelera");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");
const botonEliminar = document.querySelector("#boton-eliminar");

function mostrarRecomendaciones() {
  let contenido = ""
  recomendaciones.forEach((recomendacion) => {
    contenido += 
      <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${recomendacion}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
    
    `<card class="card-content">${recomendacion}</card>`
  })

  
  cartelera.innerHTML = contenido; 
  contador.textContent = recomendaciones.length
  // TODO 1: crear una variable de texto vacía.
  // TODO 2: recorrer el array con forEach() y una función flecha.
  // TODO 3: construir una columna y una card de Materialize por cada elemento.
  // TODO 4: incorporar el contenido en #cartelera.
  // TODO 5: actualizar #contador mediante length.
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let inputUsuario = inputRecomendacion.value.trim()

  if (inputUsuario == "") {
    mensaje.textContent = "No indico una recomendación"
    return; 
  } else
    recomendaciones.push(inputUsuario)
    console.log("Se agrego una recomendacion")

  formulario.reset();
  mostrarRecomendaciones(); 

  // TODO 6: leer el input y eliminar espacios sobrantes.
  // TODO 7: validar que el texto no esté vacío.
  // TODO 8: agregar la recomendación mediante push().
  // TODO 9: actualizar la cartelera y reiniciar el formulario.
});

botonEliminar.addEventListener("click", () => {
  if (recomendaciones.length >0){
    recomendaciones.pop(recomendaciones)
    mostrarRecomendaciones(); 
    console.log("Se elimino la rec")
    mensaje.textContent = "Se elimino la recomendacion"
  } else {
    mensaje.textContent =  "No hay recomendaciones para eliminar"
    return; 
  }

  // TODO 10: comprobar que existan recomendaciones.
  // TODO 11: eliminar la última con pop() y actualizar la cartelera.
});

mostrarRecomendaciones();
