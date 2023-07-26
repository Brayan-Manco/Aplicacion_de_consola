
const { v4: uudi4 } = require('uuid')

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor ( desc ){
        this.id = uudi4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea 