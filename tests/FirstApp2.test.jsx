import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas es FirstApp', () => {
    const title = 'Hola Mundo';
    const subTitle = 'Ich bin eine Subtitle';
    test('Shouel match with snapshot', () => {
        const {container} = render (<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show the message: Hola Mundo', () => {
        render (<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });
    
    test('Should show title in a h1 tag', () => {
        render (<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Should show subtitle send by props', () => {
        render (<FirstApp title={title} subTitle={ subTitle }/>);
        expect(screen.getByText(subTitle)).toBeTruthy();
        //expect(screen.getAllByAltText(subTitle).length).toBe(2);
    });
});