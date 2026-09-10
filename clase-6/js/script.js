const intereses = ["Diseño web", "Videojuegos", "Realidad virtual"];

console.log(intereses);

const formulario = document.querySelector("#formulario-interes");
const inputInteres = document.querySelector("#interes");
const lista = document.querySelector("#lista-intereses");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");
const botonEliminar = document.querySelector("#boton-eliminar");

function mostrarIntereses() {

  let contenido = "";  // TODO 7: crear una variable de texto vacía.
  /*
  for (const interes of intereses){
    // pasar mi interes adentro de un elemento li --> `<li> ${interes} </li>`
    contenido += `<li class="collection-item">${interes}</li>`
  }
  lista.innerHTML = contenido; 
  */

  intereses.forEach((interes) => {   // TODO 8: recorrer el array con forEach() y una función flecha.
    contenido += `<li class="collection-item">${interes}</li>`  // TODO 9: construir un li de Materialize por cada interés.
  })

  lista.innerHTML = contenido;   // TODO 10: incorporar el contenido en la lista.
  contador.textContent = intereses.length;   // TODO 11: actualizar el contador con length.
}



formulario.addEventListener("submit", (evento) => {
  // arrow function: funciones que no tienen nombre  -   // botonVerificar.addEventListener("click", function () {} 
  evento.preventDefault(); // prevenir el formulario de que se actualice o recargue 
  //frena el comportamiento normal (recargar la página), para que puedas controlar vos qué pasa.

  let interes = inputInteres.value.trim(); // TODO 1: leer el input y quitar espacios sobrantes.

  if (interes === "" ){   // TODO 2: validar que el texto no esté vacío.
    mensaje.textContent = "Debés completar interés"
    return; 
  }
  intereses.push (interes);   // TODO 3: agregar el interés mediante push().
  console.log(intereses); 
  console.log("Agregue un elemento de la lista "); 

  // TODO 4: actualizar la lista y reiniciar el formulario.
  formulario.reset();
  mostrarIntereses(); 

});

botonEliminar.addEventListener("click", () => {
  if (intereses.length > 0 ){
    intereses.pop(); 
    console.log("Elimine un elemento de la lista "); 
    console.log(intereses); 
    mostrarIntereses()

  } else {
    console.log("La lista esta vacia")
  }

  // TODO 5: comprobar que existan intereses.
  // TODO 6: eliminar el último con pop() y actualizar la lista.
});

mostrarIntereses();
