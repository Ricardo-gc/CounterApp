import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => {
    test('getHeroeByIdAsync should return an hero by ID ASYNC', ( done ) => {
        const id = 1;
        
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
                //Espera hasta que el codigo termine para continuar
                done();
            });
    });

    test('getHeroeByIdAsync should return an error si heroe no existe', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id )
            //No deberia de llamarse, porque se espera que falle
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe: '+id);
                done();
            })
    });
});