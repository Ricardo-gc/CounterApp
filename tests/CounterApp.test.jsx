import { fireEvent, render, screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe(' Pruebas en CounterApp', () => {
    const val = 10;
    test('Should match with snapshot', () => {
        render (<CounterApp value={val}/>);
        expect(screen.container).toMatchSnapshot();
    });
    
    test('Should show initial value of 100', () => {
        render (<CounterApp value={val}/>);
        expect(screen.getByText(val+"")).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(val+"");
    });
    
    test('Should add with button +1', () => {
        render (<CounterApp value={ val }/>);
        //Ejecutar/disparar un evento de click - Añadir 1
        fireEvent.click(screen.getByText('+ 1'))
        expect( screen.getByText( '11' ) ).toBeTruthy();
    });

    test('Should substract with button -1', () => {
        render (<CounterApp value={ val }/>);       
        //Quitar 1
        fireEvent.click(screen.getByText('-1'))
        expect( screen.getByText( '9' ) ).toBeTruthy();
    });
    
    test('Should substract with button reset', () => {
        render (<CounterApp value={ val }/>);       
        //Quitar 1 varias veces
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))

        //Reset despues de quitar varios
        // fireEvent.click(screen.getByText('Reset'))
        //Para hacerlo mas especifico, revisar el CounterApp para saber el atributo aria-label
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect( screen.getByText( '10' ) ).toBeTruthy();

    });
});