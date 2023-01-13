import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types'; 

const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input type='text' placeholder='Search...' value={ inputValue } onChange={ onInputChange }/>
        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};

export default AddCategory;
