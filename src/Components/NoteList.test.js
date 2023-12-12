import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoteList from "./NoteList";

test("NoteList renders correctly with notes and calls onDeleteNote", () => {
  const notes = ["Note 1", "Note 2", "Note 3"];
  const onDeleteNoteMock = jest.fn();
  const { getByText, getAllByText } = render(
    <NoteList notes={notes} onDeleteNote={onDeleteNoteMock} />
  );

  // Check if all notes are rendered
  expect(getByText("Note 1")).toBeInTheDocument();
  expect(getByText("Note 2")).toBeInTheDocument();
  expect(getByText("Note 3")).toBeInTheDocument();

  // Click the "Delete" button for the first note
  const deleteButtons = getAllByText("Delete", { exact: false });
  fireEvent.click(deleteButtons[0]); // Use the first "Delete" button

  // Check if onDeleteNote function is called with the correct index
  expect(onDeleteNoteMock).toHaveBeenCalledWith(0);
});
test("NoteList renders correctly with an empty list", () => {
  const onDeleteNoteMock = jest.fn();
  const { queryByText } = render(
    <NoteList notes={[]} onDeleteNote={onDeleteNoteMock} />
  );

  // Check if no notes are rendered
  expect(queryByText("Note 1")).not.toBeInTheDocument();
  expect(queryByText("Note 2")).not.toBeInTheDocument();
  expect(queryByText("Note 3")).not.toBeInTheDocument();
});

test("NoteList renders correctly with a single note", () => {
  const notes = ["Single Note"];
  const onDeleteNoteMock = jest.fn();
  const { getByText } = render(
    <NoteList notes={notes} onDeleteNote={onDeleteNoteMock} />
  );

  // Check if the single note is rendered
  expect(getByText("Single Note")).toBeInTheDocument();

  // Click the "Delete" button for the single note
  const deleteButton = getByText("Delete", { exact: false });
  fireEvent.click(deleteButton);

  // Check if onDeleteNote function is called with the correct index
  expect(onDeleteNoteMock).toHaveBeenCalledWith(0);
});
