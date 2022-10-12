import React from "react";
import NoteItem  from "./NoteItem";

function NoteList({notes, onDelete, onArchive, active}){
    let valid;
    let titleButton;

    if(active === true){
        valid = notes.filter(note => {
            return note.archived === false;
        });
        titleButton = 'Archive'
    } else {
        valid = notes.filter(note => {
            return note.archived === true;
        });
        titleButton = 'Move'
    }

    if(valid.length > 0){
        return(
            <div className="notes-list">
                {
                    valid.map((note) => (
                        <NoteItem key={note.id} id={note.id}  onDelete={onDelete} onArchive={onArchive} titleButton={titleButton} {...note} />
                    ))
                }
            </div>
        );
    }
    return (
        <p className="notes-list__empty-message">Note is not found</p>
    );
}

export default NoteList;