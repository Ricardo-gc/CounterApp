import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        expect(testUser).toEqual(user);
     })

     test('getUsuarioActivo should return an active user', () => { 
        const name = 'Ricardo';

        const user = getUsuarioActivo(name);
        //La forma en la que debe de ejecutarse el codigo
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
      })
});