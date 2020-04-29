import React from 'react';
export const ShowOverview = ({ overview }) => {
    return (
        <>
            <div style={{ width: '700px' }}>
                <span style={{ fontSize: '0.8em', fontWeight: '350', lineHeight: '0.9em' }}>{'Description: ' + overview}</span>
            </div>
        </>
    );
}