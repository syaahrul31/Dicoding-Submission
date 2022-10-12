import React from 'react';
import NoteItemBody from './NoteItemBody';
import DelButton from './DeleteButton';
import ArcButton from './ArchiveButton';

function NoteItem({title, createdAt, body, id, onDelete, onArchive, titleButton}){
    return (
        <div className='note-item'>
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
            <div className='note-item__action'>
                <DelButton id={id} onDelete={onDelete} />
                <ArcButton id={id} onArchive={onArchive} titleButton={titleButton} />
            </div>
        </div>
    );
}

export default NoteItem;