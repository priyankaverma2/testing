import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders App component", () => {
  render(<App />);

  // Check if the App component is rendered
  const appElement = screen.getByText("Simple Note App");
  expect(appElement).toBeInTheDocument();
});

test("adds a new note to the list", () => {
  render(<App />);

  // Input new note
  const inputElement = screen.getByPlaceholderText("Enter a new note");
  fireEvent.change(inputElement, { target: { value: "Test Note" } });

  // Click the "Add Note" button
  const addButton = screen.getByText("Add Note");
  fireEvent.click(addButton);

  // Check if the new note is added to the list
  const addedNoteElement = screen.getByText("Test Note");
  expect(addedNoteElement).toBeInTheDocument();
});

test("deletes a note from the list", () => {
  render(<App />);

  // Input new note
  const inputElement = screen.getByPlaceholderText("Enter a new note");
  fireEvent.change(inputElement, { target: { value: "Test Note" } });

  // Click the "Add Note" button
  const addButton = screen.getByText("Add Note");
  fireEvent.click(addButton);

  // Check if the new note is added to the list
  const addedNoteElement = screen.getByText("Test Note");
  expect(addedNoteElement).toBeInTheDocument();

  // Click the "Delete" button
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  // Check if the note is deleted from the list
  expect(addedNoteElement).not.toBeInTheDocument();
});
