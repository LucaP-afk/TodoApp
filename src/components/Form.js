import React, { useState } from 'react'

const Form = (props) => {
    const [value, setValue] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === '') {
            return
        }
        props.submit(value)
        setValue('')
    }

    const onChangeText = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='input' 
                type="text" 
                value={value} 
                placeholder="Things to do" 
                onChange={onChangeText} 
                autoFocus
            />
        </form>
    )
}

export default Form