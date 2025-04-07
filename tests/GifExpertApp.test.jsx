import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 

    test('debe de hacer match con el snapshot', () => {

        const {container} = render(<GifExpertApp />)
        expect(container).toMatchSnapshot(); 
    })

    test('debe de mostrar una categoria', () => { 

        render(<GifExpertApp />)
        const categoryHeader = screen.getByRole('heading', { level: 3, hidden: true });
        expect(categoryHeader.textContent).toContain('Comida');
     })

})

    