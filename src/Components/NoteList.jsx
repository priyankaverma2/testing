import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDeleteNote }) => {
  //node list to show all nodes
  return (
    <ul>
      {notes.map((note, index) => (
        // node content
        <NoteItem
          key={index}
          note={note}
          onDeleteNote={() => onDeleteNote(index)}
        />
      ))}
    </ul>
  );
};

export default NoteList;
