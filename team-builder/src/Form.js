import React, { useState } from 'react';

const Form = props => {
    const [form, setForm] = useState({
        title: ''
    });
    const handleChanges = e => {
        setForm({title: e.target.value})
    }
    return (
        <form>
            <label htmlFor='title'></label>
            <input id = 'title' type='text' onChange={handleChanges}/>
        </form>
    )
};

export default Form