import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById should return an Heroe by ID ', () => { 
        const id = 1;
        const hero = getHeroeById( id );
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById should undefined when id does not exist', () => { 
        const id = 100;
        const hero = getHeroeById( id );
        expect(hero).toBeFalsy(); //null, undefined, false
    })

    test('getHeroesByOwner should return an array with heroes from DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"}, 
            {"id": 4, "name": "Flash", "owner": "DC"}
        ]);
        //Por si hay cambios en la DATA
        expect(heroes).toEqual( heroes.filter( heroe => heroe.owner== owner ) )
    })
    
    test('getHeroesByOwner should return an array with heroes from Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)
        
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
        //Por si hay cambios en la DATA
        expect(heroes).toEqual( heroes.filter( heroe => heroe.owner== owner ) )
     })
 })