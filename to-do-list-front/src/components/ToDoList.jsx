import React, { useState } from "react";
import { Form } from "./Form";
import { Item } from "./Item";

export function ToDoList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!item.text || item == null || /^s*$/.test(item.text)) {
      alert("Please Fill In a Valid Input");
      return;
    }

    const newItems = [item, ...items];

    const url = `http://localhost:3000/items?id=${encodeURIComponent(
      item.id
    )}&text=${encodeURIComponent(item.text)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(newItems);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(item);
  };

  const removeItem = (id) => {
    const url = `http://localhost:3000/items/${encodeURIComponent(id)}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const removeFromArr = [...items].filter((item) => item.id !== id);
        setItems(removeFromArr);
        console.log("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || newValue == null || /^s*$/.test(newValue.text)) {
      alert("Please Fill In a Valid Input");
      return;
    }

    const url = `http://localhost:3000/items/${encodeURIComponent(itemId)}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValue),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems((prev) =>
          prev.map((item) => (item.id === itemId ? newValue : item))
        );
      })
      .catch((error) => console.error(error));
  };

  const completeItem = (id) => {
    let updateItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updateItems);
  };

  return (
    <div>
      <Form onSubmit={addItem} name={"Add"} />
      <Item
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
}
