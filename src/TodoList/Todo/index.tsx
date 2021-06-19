import React from "react";
import { useTodoStore } from "../todo-hooks";

type TodoItemProps = {
  text: string;
  index?: number;
};

function TodoItem({ text, index }: TodoItemProps) {
  const { deleteTodo } = useTodoStore();

  return (
    <li>
      {text}
      <button onClick={(_) => deleteTodo(index) /*讓委派函數監聽此按鈕事件*/}>
        -
      </button>
    </li>
  );
}

export default React.memo(TodoItem);
