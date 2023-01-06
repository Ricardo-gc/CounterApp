import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => { 
    test('getImagen should return an Image link', async () => {
        const url = await getImagen();
        expect(typeof(url)).toBe('string');
    });

    test('getImagen should return an error', async () => {
        const response = await getImagen();
        expect(response).toBe('Image not found');
    });
 })