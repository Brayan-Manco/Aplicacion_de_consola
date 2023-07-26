const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  //se imprime el menu que esta en alchivo inquirer
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    // cragamo las tareas que hay en la carpeta data
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //en la primera opcion se llama la funcion leerinput
        //que es para crear una nueva tarea
        const desc = await leerInput("Descripcion");
        tareas.crearTarea(desc);
        break;
      case "2":
        //muestra las todas la tareas
        tareas.listadoCompleto();
        break;
      case "3": //lista completadas
        tareas.listarPendientesCompletadas();
        break;
      case "4": //lista pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoChecklist( tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Estas Seguro que deseas borrarlo?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }

        break;
      case "0":
        break;
    }
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();

//esta es la forma mamual que funciona con el mensaje.js

// const { mostrarMenu, pause } = require("./helpers/mensajes");

// const main = async () => {

//   console.log("Hola mundo");

//   let opt = '';

//   do {
//     opt = await mostrarMenu();
//     console.log({ opt });

//     if( opt !== '0') { await pause();}

//   } while (opt !== "0");
// };
