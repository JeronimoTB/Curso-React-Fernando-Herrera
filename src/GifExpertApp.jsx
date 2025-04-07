import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Comida']);

    console.log(categories);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);

        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />

            {/* <button onClick={() => onAddCategory('Naruto')} >Agregar</button> */}

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
