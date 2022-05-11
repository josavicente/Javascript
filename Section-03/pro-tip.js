function crearPersona (nombre, apellido){

    return {
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido) => ({
        nombre,
        apellido
    })

function imprimeArgumentos(){
    console.log( argumentos );
}

imprimeArgumentos(1,2,3,4,5);