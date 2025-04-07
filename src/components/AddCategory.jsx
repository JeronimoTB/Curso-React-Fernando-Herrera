import PropTypes from "prop-types"
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }


    const onSubmit = (event) => {        
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        
        // setCategories( categories => [inputValue, ...categories] );
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}

            />

        </form>
    )
}

AddCategory.prototypes = {
    onNewCategory: PropTypes.func.isRequired
}
