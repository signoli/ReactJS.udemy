//funcion normal
function ciudadNatal(ciudad){
    return `Mi ciudad natal es ${ ciudad }`;
};

//funcion en una constante
const saludar = function(nombre, clima) {
    return `Hola ${nombre}, el clima de hoy es ${clima}`;
}

//funcion flecha en una const
const miMascota = (nombreMascota) => {
    return `Mi cascota se llama ${ nombreMascota }`;
};

//funcion flecha simplificada de una sola linea
const miOtraMascota = (nombreOtraMascota) => `Mi otra mascota se llama ${ nombreOtraMascota }`;

//arrow function simple de una sola linea sin param
const despedia = () => `Chau, nosve en disney`;

//arrow function que devuelve un objeto
const getUser = () => ({
    uid: 'zxCsd21s',
    username: 'Tronkillo',
});


//Prueba en consola
console.log( ciudadNatal('Resistencia') );
console.log( saludar('Sergio', 'calido') );
console.log( miMascota('Covicho') );
console.log( miOtraMascota('Moyo') );
console.log( despedia() );
console.log( getUser().username );