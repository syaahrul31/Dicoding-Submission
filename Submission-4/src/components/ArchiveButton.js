import React from 'react';

function ArcButton({id, onArchive, titleButton}){
    return (
        <button className='note-item__archive-button' onClick={() => onArchive(id)}>{titleButton}</button>
    )
}

export default ArcButton;