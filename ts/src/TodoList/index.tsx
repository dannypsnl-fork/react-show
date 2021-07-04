import React, { useState, useReducer } from "react";
import TodoItem from "./Todo";
import { todocer } from "./todocer";

export default function TodoList() {
  // init todo text
  const [todoText, setTodoText] = useState("");
  const [todoStore, dispatch] = useReducer(todocer, []);

  const addTodo = (text: string) =>
    dispatch({ type: "ADD_TODO", todoStr: text });
  const deleteTodo = (index: number) =>
    dispatch({ type: "DELETE_TODO", index: index });

  // remember `addAndCleanTodo` dependent on `todoStr` this state, don't move it out of the scope
  const addAndCleanTodo = () => {
    if (todoText !== "") {
      addTodo(todoText);
      // clean input text after create a new todo item
      setTodoText("");
    }
  };

  return (
    <>
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
          <TodoItem
            key={index}
            text={todoText}
            index={index}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
