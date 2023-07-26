const Tarea = require("./tarea");

class Tareas {

    //propiedad
    _listado = {};

    //se usa un get que es javascript que retirna un nuevo arreglo de listado
    get listadArr() {
        const listado = [];
        // el arreglo se rellena con el obejct.key
        // depuespues de teronar la lista se le añade el forEach el cual barre cada dato 
        // del listado
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key]
            console.log(tarea);
        });
        // se estrae la atras que ya esat instanciada  y se añade al listado y eso es lo que se retorna 

        return listado;
    }

    constructor() {
        this._listado = {};
    }


    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;