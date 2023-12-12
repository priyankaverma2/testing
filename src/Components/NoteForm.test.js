import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewNoteForm from "./NewNoteForm";

test("NoteForm renders correctly and adds a note", () => {
  const onAddNoteMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <NewNoteForm onAddNote={onAddNoteMock} />
  );

  const inputElement = getByPlaceholderText("Enter a new note");
  const addButton = getByText("Add Note");

  // Type a note in the input
  fireEvent.change(inputElement, { target: { value: "Test Note" } });

  // Click the "Add Note" button
  fireEvent.click(addButton);

  // Check if onAddNote function is called with the correct argument
  expect(onAddNoteMock).toHaveBeenCalledWith("Test Note");

  // Check if the input is cleared after adding a note
  expect(inputElement.value).toBe("");
});

test("NewNoteForm does not add an empty note", () => {
  const onAddNoteMock = jest.fn();
  const { getByText } = render(<NewNoteForm onAddNote={onAddNoteMock} />);

  const addButton = getByText("Add Note");

  // Click the "Add Note" button without typing a note
  fireEvent.click(addButton);

  // Check if onAddNote function is not called
  expect(onAddNoteMock).not.toHaveBeenCalled();
});
