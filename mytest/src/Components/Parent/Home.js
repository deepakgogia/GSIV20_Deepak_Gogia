import React from 'react';
export const Home = (props) => {
    return (
        <>
            <button style={{ float: 'right', display: 'block', }} onClick={() => props.clickEvent()}>Home</button>
        </>
    )
}