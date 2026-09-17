// Inicializar el select de Materialize
document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);
});


// 1. Seleccionar los elementos del HTML
const nombreUsario = document.querySelector("#nombre");  
const edadUsario = document.querySelector("#edad"); 
const genero = document.querySelector("#genero"); 
const prefiereCortoUsuario = document.querySelector("#libroCorto"); 
const botonRecomendacion = document.querySelector("#botonRecomendar"); 
const mensajeResultado = document.querySelector ("#mensajeResultado"); 
const bloqueResultado = document.querySelector ("#resultado"); 
const tituloResultado = document.querySelector("#tituloResultado");

// 2. Crear la función recomendarLibro
// Debe recibir:
// - genero
// - edad
// - prefiereCorto
//
// La función debe devolver el nombre del libro recomendado.

function recomendarLibro(genero, edad, prefiereCorto) {

  let libro = "";

  if (genero === "ciencia-ficcion") {
    if (edad < 18) { //menor 
      if (prefiereCorto === true) {//menor &  prefiere corto
        libro = "Cuentos del futuro"
      } else { //menor & prefiere largo
        libro = "El juego de Ender"
      }
    } else { //mayor 
      if (prefiereCorto === true) {//mayor &  prefiere corto
        libro = "Ubik"
      } else { //mayor & prefiere largo
        libro = "Dune"
      }
    }

  } else if (genero === "misterio") {
    if (edad < 18) { //menor 
      if (prefiereCorto === true) {//menor &  prefiere corto
        libro = "Socorro 10"
      } else { //menor & prefiere largo
        libro = "Monstruos y fantasmas de acá nomás"
      }
    } else { //mayor 
      if (prefiereCorto === true) {//mayor &  prefiere corto
        libro = "El sabueso de los Baskerville"
      } else { //mayor & prefiere largo
        libro = "El nombre de la rosa"
      }
    }

  } else //fantasia
    if (edad < 18) { //menor 
      if (prefiereCorto === true) {//menor &  prefiere corto
        libro = "El príncipe feliz y otros cuentos"
      } else { //menor & prefiere largo
        libro = "El Hobbit"
      }
    } else { //mayor 
      if (prefiereCorto === true) {//mayor &  prefiere corto
        libro = "El océano al final del camino"
      } else { //mayor & prefiere largo
        libro = "El Señor de los Anillos"
      }
    }

  // 3. Usar condicionales para elegir el libro
  //
  // Tener en cuenta:
  // - género
  // - si es menor o mayor de 18 años
  // - si prefiere un libro corto o largo

  return libro;
}

botonRecomendacion.addEventListener("click", function (){
  const nombreIngresado = nombreUsario.value.trim();
  const edadIngresada = Number(edadUsario.value); 
  const generoIngresado = genero.value;
  const preferencia = prefiereCortoUsuario.checked;  

  bloqueResultado.classList.remove("oculto");
  bloqueResultado.classList.remove("error"); 

  if (nombreIngresado === "" || edadIngresada <=0 || generoIngresado === "") {
    tituloResultado.textContent  = "Datos invalidos"
    mensajeResultado.textContent = "Por favor revisa los datos"
    bloqueResultado.classList.add("error"); 
    return; // Como el bloque if termina con return, la función corta ahí si los datos son inválidos.

  } else{ // puede ir dentro de el else o fuera de 
    const recomendacion_final = recomendarLibro(generoIngresado, edadIngresada, preferencia)
    tituloResultado.textContent  = "Recomendación"
    mensajeResultado.textContent = `Hola ${nombreIngresado}, te recomiendo: ${recomendacion_final}`;
  }
})


// 4. Escuchar el click del botón
// 5. Obtener los valores ingresados
// 6. Llamar a recomendarLibro()
// 7. Mostrar el resultado en la tarjeta
