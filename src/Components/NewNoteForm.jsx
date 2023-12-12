import React, { useState } from "react";

const NewNoteForm = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState("");
  //add new node
  const addNote = () => {
    if (newNote.trim() !== "") {
      onAddNote(newNote);
      setNewNote("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter a new note"
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default NewNoteForm;
