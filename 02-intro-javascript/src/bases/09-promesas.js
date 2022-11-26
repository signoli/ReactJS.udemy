import { getHeroeById, getHeroeByOwner } from "./bases/08-import-export";

// const promesa = new Promise( (resolve, reject)=> {
    
//     setTimeout(() => {
//         const hero = getHeroeById(2);
//         const owner = getHeroeByOwner('Marvel');
//         resolve(hero);
//         //reject('El heroe que busca esta en otra revista de virgo')
//     }, 2000);
// });

// promesa.then( ( datoDelResolve ) => {
//     console.log('Esto es lo que salio ', datoDelResolve )
// } )
// .catch( err => console.warn( err ) )

const getHeroesyIdAsync = (id) => {
    return new Promise( (resolve, reject)=> { 
          
        setTimeout(() => {
            const hero = getHeroeById(id);
            
            if ( !hero ){ 
                reject( 'El heroe no existe' ); 
            }
            
            resolve(hero);

        }, 2000);
    });
}

getHeroesyIdAsync(16)
    .then( console.log )
    .catch( console.warn )