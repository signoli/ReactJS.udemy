const provincias = ['Chaco', 'Buenos Aires', 'Cordoba', 'Salta'];

//destructurando arreglo
const [ , , p3] = provincias;
console.log (p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const useState = ( valor ) => {
    return [ valor, () => { console.log( 'hola Mundo' )} ];
}

const [ nombre, setNombre ] = useState( 'Sergio' );

console.log(nombre)
setNombre();    