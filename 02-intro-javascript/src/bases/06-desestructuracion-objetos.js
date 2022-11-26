 const persona = {
    nombre: 'Sergio',
    edad: 27,
    trabajo: 'Ejercito Argentino',
    ciudad: 'Resistencia'
 };

 //Destructurar objeto Persona
const { nombre, edad, trabajo, ciudad } = persona;

    console.log(nombre, edad, trabajo, ciudad)


//Desestructurar directamente en la arrowfunction
const useContext = ({ nombre, trabajo, edad, rango = 'Soldado'}) => {

        return {
            _name: nombre,
            _age: edad,
            _range: rango,
            _jobs: trabajo,
            position: {
                lat: 14.1232,
                long: -14.6422
            }
        }
    
}

//Desestructuracion anidada de objetos
const {_name,_jobs, _range, _age, position:{lat, long}} = useContext( persona );

console.log(_name, _jobs, _age, lat, long);