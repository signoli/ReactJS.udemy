import { getUser } from '../../src/base-pruebas/05-funciones';

describe('Prueba Funciones 05', () => { 
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: '123ABC',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
     })

     test('getUsuarioActivo debe retornar un objeto', () => { 
       
        expect( user ).toEqual({
            uid: '123ABC',
            username: 'El_Papi1502'
        })
      })
 })