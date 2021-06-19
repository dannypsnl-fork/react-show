import React, { useState } from "react";
import TodoItem from "./Todo";
import TodoStoreProvider, { useTodoStore } from "./todo-hooks";

export default function TodoList() {
  // init todo text
  const [todoText, setTodoText] = useState("");
  const { todoStore, addTodo } = useTodoStore();

  // remember `addAndCleanTodo` dependent on `todoStr` this state, don't move it out of the scope
  const addAndCleanTodo = () => {
    if (todoText !== "") {
      addTodo(todoText);
      // clean input text after create a new todo item
      setTodoText("");
    }
  };

  return (
    <TodoStoreProvider>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addAndCleanTodo() : null)}
      />
      <p>Next Todo is: {todoText}</p>
      <button
        onClick={(_: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          addAndCleanTodo()
        }
      >
        Add Todo
      </button>
      <ul>
        {todoStore.map((todoText: string, index: number) => (
          <TodoItem key={index} text={todoText} index={index} />
        ))}
      </ul>
    </TodoStoreProvider>
  );
}
