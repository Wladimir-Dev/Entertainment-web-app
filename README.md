# Aplicación para buscar y guardar películas


![finaaal](https://user-images.githubusercontent.com/73859922/222594160-f1ee0c5a-7739-4e08-9dc4-ffa890ee34d9.jpg)



API a usar: https://yts.mx/api/v2/list_movies.json?  **No se requiere Api Key**

**React Hooks** empleados:

 - useId
 - useCallback
 - useState
 - useRef
 - useEffect




Otras herramientas o servicios empleados:

 - Custom Hooks
 - React Router DOM
 - React Icons
 - Debounce:    **just-debounce-it**  https://www.npmjs.com/package/just-debounce-it
 - Local storage 

Requerimientos:

✅  Necesita mostrar un input para buscar la película 

✅  Lista las películas y muestra el título, año y poster.

✅  Que el formulario funcione

✅  Haz que las películas se muestren en un grid responsive.

✅  Hacer el fetching de datos a la API

✅  Marcar y desmarcar peliculas a guardar

✅  Visualizar películas guardadas

✅  Descargar torrent de la película

Primera iteración:

✅  Evitar que se haga la misma búsqueda dos veces seguidas.

✅  Haz que la búsqueda se haga automáticamente al escribir.

✅  Evita que se haga la búsqueda continuamente al escribir (debounce)
