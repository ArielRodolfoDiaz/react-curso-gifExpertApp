import React, { useState } from 'react'
import AddCategory from './componets/AddCategory'
import GifGrid from './componets/GifGrid'

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])



    return (
        <>
            <h1>GifExpertApp</h1>
            <br />
            <AddCategory 
            setCategories={setCategories}/>

            <br/>
            <ol>
                {
                    categories.map(e => (
                        <GifGrid key={e} categories={e}/>)
                        )
                }
            </ol>

            
        </>
    )
}

export default GifExpertApp