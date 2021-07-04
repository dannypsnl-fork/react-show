import React from "react";
import { useTodoStore } from "./index";

export default function TodoItem({ index, text }) {
  let { deleteTodo } = useTodoStore();

  return (
    <li key={index}>
      {text}
      <button onClick={(_e) => deleteTodo(index)}>-</button>
    </li>
  );
}
