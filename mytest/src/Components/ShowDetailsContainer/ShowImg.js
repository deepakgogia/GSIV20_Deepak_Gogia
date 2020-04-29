import React from 'react';
export const ShowImg = ({ poster_path }) => {
    return (
        <div className='itemShowImgDiv'>
            <img className='itemShowImg' src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + poster_path}
                onError={(e) => e.target.src = '/Images/Default.jpg'} />
        </div>
    )
}