import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

class ArchivedNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ArchivedNotes: getArchivedNotes(),
    };
  }

  render() {
    return (
      <section>
        <NoteList notes={this.state.ArchivedNotes} />
      </section>
    );
  }
}

export default ArchivedNotes;
