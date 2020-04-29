import React from 'react';
export const ShowName = ({ name, rating }) => {
    return (
        <div>
            <span className='itemName'>{name}</span>
            {rating && ' (' + rating + ')'}
        </div>
    )
}