import React from 'react';

import { PropTypes } from 'prop-types';

import GifItem from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { isLoading && <p>Loading...</p> }

            <div className='card-grid'>
                { images.map(img => <GifItem key={ img.id } title={ img.title } url={ img.url }/>) }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
