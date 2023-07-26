const Tarea = require("./tarea");

class Tareas {
  //propiedad que es un objeto no un arreglo[]
  _listado = {};

  //se usa un get que es javascript que retirna un nuevo arreglo de listado
  get listadoArr() {
    const listado = [];
    // el arreglo se rellena con el obejct.key
    // depuespues de teronar la lista se le añade el forEach el cual barre cada dato
    // del listado
    Object.keys(this._listado).forEach((key) => {
      // se extrae que ya esta insanciada
      const tarea = this._listado[key];
      //se añade al listado
      listado.push(tarea);
    });
    // se estrae la atras que ya esat instanciada  y se añade al listado y eso es lo que se retorna
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log("");
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      //ternario
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      if (completadas) {
        // mostrar completadas
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").green} ${desc} :: ${completadoEn.green}`
          );
        }
      } else {
        // mostrar pendientes
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    //se utiliza el arreglo que se tiene de las tareas
    this.listadoArr.forEach((tarea) => {
      //si no existe la opcion , se limpia 
      if (!ids.includes(tarea.id)) {
        //se le quita el comletado y se envia null
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
