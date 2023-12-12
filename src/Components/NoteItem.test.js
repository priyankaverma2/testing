import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoteItem from "./NoteItem";

test("NoteItem renders correctly and calls onDeleteNote", () => {
  const onDeleteNoteMock = jest.fn();
  const { getByText } = render(
    <NoteItem note="Test Note" onDeleteNote={onDeleteNoteMock} />
  );

  const deleteButton = getByText("Delete");

  // Click the "Delete" button
  fireEvent.click(deleteButton);

  // Check if onDeleteNote function is called
  expect(onDeleteNoteMock).toHaveBeenCalled();
});

test("NoteItem renders correctly with a different note", () => {
  const onDeleteNoteMock = jest.fn();
  const { getByText } = render(
    <NoteItem note="Another Note" onDeleteNote={onDeleteNoteMock} />
  );

  const deleteButton = getByText("Delete");

  // Check if the correct note is rendered
  expect(getByText("Another Note")).toBeInTheDocument();

  // Click the "Delete" button
  fireEvent.click(deleteButton);

  // Check if onDeleteNote function is called
  expect(onDeleteNoteMock).toHaveBeenCalled();
});
