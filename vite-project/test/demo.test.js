describe('Pruebas en demo testing', () => {
   
    test('Esto es una prueba de testing', () => {
    
        const message1 = 'Observando componente';
    
        const message2 = message1.trim();
    
        expect( message1 ).toBe( message2 )
    })
})