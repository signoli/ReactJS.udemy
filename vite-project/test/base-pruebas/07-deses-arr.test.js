import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr'

describe('Prueba en 07-deses-arr', () => { 
    test('debe retornar un string y un numero', () => { 
        const [letter, numbers] = retornaArreglo();
        expect( letter ).toBe( 'ABC' );
        expect( numbers ).toBe( '123' );
    })
 })