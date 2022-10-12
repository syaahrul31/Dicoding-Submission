import React from 'react';

function NoteSearch({keywordSearch, addKeyword}){
  function onKeywordChangeEventHandler(event){
    addKeyword({keywordSearch: event.target.value});
  }
    return(
        <input type="text" placeholder='Search here...' value={keywordSearch} onChange={onKeywordChangeEventHandler}></input>
    );
}


export default NoteSearch;