const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  //fs.writeFileSyn escribe y guarda en un archivo
  //JSON.stringifi combierte un arreglo a su version valida de json en string
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(info);
//   console.log(data)

  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
