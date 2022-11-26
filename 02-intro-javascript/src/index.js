const provincias = ['Chaco', 'Buenos Aires', 'Cordoba', 'Salta'];

//destructurando arreglo
const [ , , p3] = provincias;
console.log (p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const usarNombre = ( valor ) => {
    return [ valor, () => { console.log( 'hola Mundo' )} ];
}

const [ nombre, setNombre ] = usarNombre( 'Sergio' );

console.log(nombre)
setNombre();    