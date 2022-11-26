const arreglo = [1,2,3,4];

//arreglo.push(1);

//clonamos el arreglo
let arreglo2 =[ ...arreglo, 5 ];

//map mediante callback multiplica los arreglos
const arreglo3 = arreglo2.map( function (numero){
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );