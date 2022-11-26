import heroes, { owner } from '../data/heroes';

//Uso del find 
export const getHeroeById = (id) => heroes.find( (hereo) => hereo.id === id);

//Uso del filter
export const getHeroeByOwner = (owner) => heroes.filter( (hereo) => hereo.owner === owner);


//console.log( getHeroeById(3) );
//console.log( getHeroeByOwner('Marvel') );
//console.log( owner );
