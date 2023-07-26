const fs = requiere('fs');


const guardarDB = (data) => {
    const archivo = './db/data.txt';


    fs.writeFileSync(archivo, data);
}

exports.module = {
    guardarDB,
} 