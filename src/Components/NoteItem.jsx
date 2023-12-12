import React from "react";

const NoteItem = ({ note, onDeleteNote }) => {
  // node content
  return (
    <li>
      {note}
      <button onClick={onDeleteNote}>Delete</button>
    </li>
  );
};

export default NoteItem;
