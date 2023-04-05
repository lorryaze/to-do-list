import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./Form";

test("renders the input and submit button", () => {
  const onSubmit = jest.fn();

  render(<Form onSubmit={onSubmit} name="Add" />);

  const inputElement = screen.getByPlaceholderText("add a item");
  const submitButtonElement = screen.getByRole("button", { name: "Add" });

  expect(inputElement).toBeInTheDocument();
  expect(submitButtonElement).toBeInTheDocument();
});

test("submits the form when the submit button is clicked", () => {
  const onSubmit = jest.fn();

  render(<Form onSubmit={onSubmit} name="Add" />);

  const inputElement = screen.getByPlaceholderText("add a item");
  const submitButtonElement = screen.getByRole("button", { name: "Add" });
  const newItemText = "New item";

  fireEvent.change(inputElement, { target: { value: newItemText } });
  fireEvent.click(submitButtonElement);
  expect(onSubmit).toHaveBeenCalledWith({
    id: expect.any(Number),
    text: newItemText,
  });
});
