// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname}, ${item.age} años</p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

function classInfo(data) {
  container.innerHTML += `<h3> Los estudiantes pertenecen al curso de ${data.course}, con el id
                          #${data.id} y bajo la supervisión de ${data.teacherName}.</h3>`;
} //quise agregar esto para veo cómos sería agregar el resto de la info

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
fetch(DATA_URL)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la petición'); //si la respuesta no esta ok tira el error
          }
          return response.json(); // si todo esta ok responde con el json
      })
      .then(data => { //llamamos a la data
        const estudiantes = data.students; //definimos la constante de la data
        showData(estudiantes); // y llamamos a la funcion la constante que definimos
        classInfo(data);
      });

