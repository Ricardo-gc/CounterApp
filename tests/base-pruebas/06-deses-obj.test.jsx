import { usContext } from '../../src/base-pruebas/06-deses-obj'
describe('Prueba en 06-dest-obj', () => { 
    test('usContext should return an Object', () => { 
        const values = { clave: '1047', edad: '22' }
        const func = usContext(values);

        expect(func).toEqual({
            nombreClave: values.clave,
            anios: values.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
     })
 })