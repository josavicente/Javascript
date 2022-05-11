let personaje = {

    nombre : 'Tony Stark',
    codeName : 'Iron Man',
    vivo: false,
    edad: 40,
    coords : {
        lat : 12.34,
        lng: -11.12
    },
    trajes : ['MArk I', 'Mark V', 'Hulkbuster'],
    direccion : {
        zip: '10880, 90265',
        ubicacion : 'Malibu, California'
    }
};

console.log('Nombre: ', personaje);
console.log('Nombre: ', personaje['nombre']);
console.log('Nombre: ', personaje.trajes.length);