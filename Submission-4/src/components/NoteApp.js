import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordAddHandler = this.onKeywordAddHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState((prev) => {
      return { ...prev, notes };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (note.archived === true) {
          return { ...note, archived: false };
        } else {
          return { ...note, archived: true };
        }
      }
      return note;
    });
    this.setState((prev) => {
      return {
        ...prev,
        notes,
      };
    });
  }

  onKeywordAddHandler({ keywordSearch }) {
    this.setState((prev) => {
      return { ...prev, keyword: keywordSearch };
    });
  }

  render() {
    const search = this.state.keyword.toLowerCase();
    const valid = this.state.notes.filter((note) => {
      if (search === "") {
        return note;
      } else {
        return note.title.toLocaleLowerCase().includes(search);
      }
    });
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Personal Notes</h1>
          <div className="note-search">
            <NoteSearch
              keywordSearch={this.state.keyword}
              addKeyword={this.onKeywordAddHandler}
            />
          </div>
        </div>
        <div className="note-app__body">
          <div className="note-input">
            <h2>Create Note</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Active Notes</h2>
          <NoteList
            notes={valid}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            active={true}
          />
          <h2>Archive Notes</h2>
          <NoteList
            notes={valid}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            active={false}
          />
        </div>
        <div className="note-footer">
          <p>&copy;2022, Personal Notes</p>
        </div>
      </div>
    );
  }
}
// function NoteApp(){
//     const notes = getInitialData();

//     return(
//         <div className="note-app__body">
//             <h2>Active Notes</h2>
//             <NoteList notes={notes}/>
//         </div>
//     );
// }

export default NoteApp;
