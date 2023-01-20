import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas es FirstApp', () => {
    // test('debe hacer match con el snaptshot', () => {
    //     const title = 'Hola Mundo';
    //     const {container} = render( <FirstApp title={title} /> )
    //     //Se asegura de que el componente no debe de cambiar, debe de regresar las mismas etiquetas y textos
    //     expect( container ).toMatchSnapshot();
    // });
    
    test('FirstApp shoul return a title in h1 tag', () => {
        const title = 'Hola Mundo';
        const {container, getByText, getByTestId} = render( <FirstApp title={title} /> )
        expect(getByText(title)).toBeTruthy();

        //Como no se debe de hacer
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toBe(title);
    });

    test('Should show subtitle send by props', () => {
        const title = 'Hola Mundo';
        const subTitle = 'Ich bin eine Subtitle';
        const {getByText, getAllByAltText} = render( <FirstApp title={title}  subTitle={subTitle}/> )
        
        expect(getByText(subTitle)).toBeTruthy();
        //Cuando se espera que este más de una vez
        // expect(getAllByAltText(subTitle).length).toBe(2);
    });

    
});