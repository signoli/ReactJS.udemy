import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en lista de Heroes", () => {
    //1.a
    test('Debe retornar un arreglo con los heroes de DC', () => { 
        const owner = "DC";
        const byOwner = getHeroesByOwner(owner);
        
        const {name} = byOwner;

        console.log(name)
    })

    //1.b     
    test(" Length ===3 DC", () => {
        const owner = "DC";
        const byOwner = getHeroesByOwner(owner);
    
        expect(byOwner.length).toBe(3)
    
    });

    //1.c
    test('should first', () => { 
        const owner = "DC";
        const byOwner = getHeroesByOwner(owner);
     })

    //2.a
    test('Debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner = "DC";
        const byOwner = getHeroesByOwner(owner);
    })

    //2.b
    test(" Length === 2 Marvel ", () => {
        const owner = "Marvel";
        const byOwner = getHeroesByOwner(owner);
    
        expect(byOwner.length).toBe(2)
    
    });
});
