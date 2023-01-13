import React from 'react';
import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

// import { AddCategory, GifGrid } from './components';

const GifApp = () => {
    const [ categories, setCategories ] = useState([ 'Dragon Ball', 'One Punch', 'Rick And Morty' ]);

    const categoriesToLowerCase = categories.map(category => category.toLowerCase());

    const onAddCategory = (newCategory) => {
        if (categoriesToLowerCase.includes(newCategory.toLowerCase())) return;

        setCategories([ newCategory, ...categories ]);
    };

    return (
        <>
            <h1>Gif - App</h1>
            
            <AddCategory onNewCategory={ onAddCategory }/>
            
            { categories.map(category => <GifGrid key={ category } category={ category }/> )}
        </>
    )
};

export default GifApp;
