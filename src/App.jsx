import React, { useState } from "react";
import "./App.css";
import NewNoteForm from "./Components/NewNoteForm";
import NoteList from "./Components/NoteList";

function App() {
  console.log("this is testing app from dev1 branch");
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Simple Note App</h1>
      {/* form to enter new node */}
      <NewNoteForm onAddNote={addNote} />
      {/* node list to show all nodes */}
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
