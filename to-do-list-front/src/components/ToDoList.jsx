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
      <Form onSubmit={addItem} />
      <Item items={items} completeItem={completeItem} />
    </div>
  );
}
