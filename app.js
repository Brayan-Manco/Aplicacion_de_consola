require("colors");

const { mostrarMenu, pause } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  console.log("Hola mundo");

  let opt = '';

  do {
    opt = await mostrarMenu();
    console.log({ opt });

    if( opt !== '0') { await pause();}

  } while (opt !== "0");
};

main();
