import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Form } from "./Form";

export function Item({ items, completeItem, removeItem, updateItem }) {
  const [editItem, setEditItem] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateItem(editItem.id, value);
    setEditItem({
      id: null,
      value: "",
    });
  };

  if (editItem.id) {
    return <Form edit={editItem} onSubmit={submitUpdate} name={"Edit"} />;
  }

  return items.map((item, index) => (
    <div
      className={item.isComplete ? "item-row complete" : "item-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeItem(item.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEditItem({ id: item.id, value: item.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
