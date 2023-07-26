const { inquirerMenu, 
        pausa,
        leerInput 
} = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

require("colors");

console.clear();




const main = async () => {

  let opt = "";

  //se imprime el meun que esta en alchivo inquirer
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //en la primera opcion se llama la funcion leerinput
        //que es para crear una nueva tarea 
        desc = await leerInput( 'Descripcion' );
        tareas.crearTarea ( desc );
        break;
      case '2':
        //muestra las todas la tareas
        console.log( tareas.listadArr );
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 0:
        break;
    }
    guardar

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
