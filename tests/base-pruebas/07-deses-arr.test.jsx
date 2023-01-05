import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'
describe('Prueba en 07-deses-arr', () => {
    test('retornaArreglo should work string and number', () => { 
        const [letters, numbers] = retornaArreglo();
        //Estrcito en lo que debe de regresar
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //Estricto en el tipo de dato que debe de regresar
        expect(typeof(letters)).toBe('string')
        expect(typeof(numbers)).toBe('number')
        
        //Para darle flexibilidad a las pruebas
        //Espera cualquier cadena de texto
        expect( letters ).toEqual( expect.any(String))
     })
});