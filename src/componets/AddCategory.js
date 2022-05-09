import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({setCategories}) {

    const [inputValue, setInputValue] = useState('')

    const HandleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length>2){
            setCategories(cats => [ inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={HandleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={HandleInputChange}
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

export default AddCategory