import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en el componente AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />) //Sujeto de pruebas
        const input = screen.getByRole('textbox') //Se trae el input
        // console.log(input);
        
        fireEvent.input(input, {target: {value: 'Saitama'}}) //Simula el input disparandolo

        expect(input.value).toBe('Saitama') //Compara el valor del input
        // screen.debug()
        
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />) //Sujeto de pruebas

        const input = screen.getByRole('textbox') //Se trae el input
        const form = screen.getByRole('form') //Se trae el form

        fireEvent.input(input, {target: {value: inputValue}}) //Simula el input disparandolo
        fireEvent.submit(form); //Simula el submit disparandolo

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        
    })


    test('no debe de llamar onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />) //Sujeto de pruebas

        const form = screen.getByRole('form') //Se trae el form
        fireEvent.submit(form); //Simula el submit disparandolo

        expect(onNewCategory).not.toHaveBeenCalled();
    })
}) 