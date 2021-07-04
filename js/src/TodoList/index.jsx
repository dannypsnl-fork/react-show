import React, { createContext, useContext, useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import { todocer } from "./todocer";

const TodoContext = createContext();

export function useTodoStore() {
  return useContext(TodoContext);
}

export function TodoStoreProvider({ children }) {
  const [todoStore, dispatch] = useReducer(todocer, []);

  const addTodo = (text) => dispatch({ type: "ADD_TODO", todoStr: text });
  const deleteTodo = (index) => dispatch({ type: "DELETE_TODO", index: index });

  return (
    <TodoContext.Provider value={{ todoStore, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default function TodoList() {
  let { todoStore, addTodo } = useTodoStore();
  let [text, setText] = useState("");

  const addAndCleanTodo = () => {
    if (text !== "") {
      addTodo(text);
      // clean input text after create a new todo item
      setText("");
    }
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addAndCleanTodo() : null)}
      ></input>
      <button onClick={(_e) => addAndCleanTodo()}>add todo</button>
      <ul>
        {todoStore.map((text, index) => (
          <TodoItem index={index} text={text}></TodoItem>
        ))}
      </ul>
    </>
  );
}
