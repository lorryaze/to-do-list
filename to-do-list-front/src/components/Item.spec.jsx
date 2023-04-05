import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import { Item } from "./Item";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Form } from "./Form";
describe("Item", () => {
  const items = [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ];

  it("renders the items correctly", () => {
    const { getByText } = render(
      <Item
        items={items}
        completeItem={jest.fn()}
        removeItem={jest.fn()}
        updateItem={jest.fn()}
      />
    );

    items.forEach((item) => {
      const itemText = getByText(item.text);
      expect(itemText).toBeInTheDocument();
      if (item.isComplete) {
        expect(itemText).toHaveClass("item-row", "complete");
      }
    });
  });

  it("calls completeItem when an item is clicked", () => {
    const completeItemMock = jest.fn();
    const { getByText } = render(
      <Item
        items={items}
        completeItem={completeItemMock}
        removeItem={jest.fn()}
        updateItem={jest.fn()}
      />
    );

    const itemText = getByText(items[0].text);
    fireEvent.click(itemText);
    expect(completeItemMock).toHaveBeenCalledWith(items[0].id);
  });

  it("calls removeItem when the delete icon is clicked", () => {
    const removeItemMock = jest.fn();
    const { getByText } = render(
      <Item
        items={items}
        completeItem={jest.fn()}
        removeItem={removeItemMock}
        updateItem={jest.fn()}
      />
    );

    const { getAllByTestId } = render(
      <RiCloseCircleLine
        onClick={() => removeItemMock(item.id)}
        className="delete-icon"
        data-testid="delete-button"
      />
    );

    const itemText = getByText(items[0].text);
    const deleteIcons = getAllByTestId("delete-button", {
      hidden: true,
      container: itemText.closest(".item-row"),
    })[0];

    fireEvent.click(deleteIcons);
    expect(removeItemMock).toHaveBeenCalledWith(items[0].id);
  });

  it("calls setEditItem when the edit icon is clicked", () => {
    const setEditItemMock = jest.fn();
    const onSubmit = jest.fn();

    const { getByText } = render(
      <Item
        items={items}
        completeItem={jest.fn()}
        removeItem={jest.fn()}
        updateItem={setEditItemMock}
      />
    );

    const { getAllByTestId } = render(
      <TiEdit
        onClick={() => setEditItemMock(item.id, item.text)}
        className="edit-icon"
        data-testid="edit-button"
      />
    );

    const itemText = getByText(items[0].text);
    const editIcons = getAllByTestId("edit-button", {
      hidden: true,
      container: itemText.closest(".item-row"),
    })[0];

    fireEvent.click(editIcons);
    expect(
      render(<Form edit={setEditItemMock} onSubmit={onSubmit} name={"Edit"} />)
    );
  });
});
