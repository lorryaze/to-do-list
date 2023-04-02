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
    setItems(newItems);
    console.log(...items);
  };

  const removeItem = (id) => {
    const removeFromArr = [...items].filter((item) => item.id !== id);
    setItems(removeFromArr);
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || newValue == null || /^s*$/.test(newValue.text)) {
      alert("Please Fill In a Valid Input");
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
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
