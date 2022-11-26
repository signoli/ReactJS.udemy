const persona = {
    nombre: 'Sergio',
    apellido: 'Ricolini',
    edad: 45,
    direccion: {
        calle: 'colombia',
        numero: 108,
    },
};

//clonar objetos
const persona2 = { ...persona };

persona2.nombre = 'Ricardo';

//vista de tabla de llaves y valores.
console.table( persona );

//verificar la diferencia de ambos objetos.
console.log( persona );
console.log( persona2 );