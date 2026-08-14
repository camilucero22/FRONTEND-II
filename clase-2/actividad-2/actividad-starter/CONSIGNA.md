# Actividad — Convertir una tarjeta estática en interactiva

## Objetivo

Agregar comportamiento a una tarjeta ya construida con HTML y CSS.

## Consigna

Completar `script.js` para que la página permita:

1. **Presentar al autor o autora:** al presionar “Presentarme”, reemplazar el texto de la descripción por un saludo con su nombre.
2. **Cambiar la apariencia:** al presionar “Cambiar estilo”, agregar o quitar la clase `destacada` en la tarjeta.
3. **Contar Me gusta:** cada clic debe aumentar el número que aparece en el botón.
4. **Extra**: una vez implementado el contador, hacer que cambie el corazón entre ♥ y ♡. 
5. **Extra**: ubicar el botón de like sobre margen derecho de la tarjeta.

Para resolverlo deberán:

- crear las variables necesarias;
- seleccionar los elementos con `document.querySelector()`;
- usar `addEventListener("click", ...)`;
- modificar `textContent` o `classList`.

## Desafíos opcionales

- Cambiar el título de la tarjeta desde JavaScript.
- Agregar un botón que oculte y vuelva a mostrar la descripción.
- Personalizar colores, tipografía y contenido sin quitar las funciones pedidas.

## Entrega

Entregar la carpeta completa con `index.html`, `styles.css` y `script.js`. Verificar antes que los tres botones funcionen.
