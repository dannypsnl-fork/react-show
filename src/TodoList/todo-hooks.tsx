import React, { createContext, useReducer, useContext } from "react";
import { todocer } from "./todocer";

type TodoStoreContextProps = {
  todoStore: string[];
  addTodo: (text: string) => void;
  deleteTodo: (index: number) => void;
};

const TodoStoreContext = createContext<Partial<TodoStoreContextProps>>({});

const useTodoStore = () => useContext(TodoStoreContext);

function TodoStoreProvider({ children }) {
  const [todoStore, dispatch] = useReducer(todocer, []);

  const addTodo = (text: string) =>
    dispatch({ type: "ADD_TODO", todoStr: text });
  const deleteTodo = (index: number) =>
    dispatch({ type: "DELETE_TODO", index: index });

  return (
    <TodoStoreContext.Provider value={{ todoStore, addTodo, deleteTodo }}>
      {children}
    </TodoStoreContext.Provider>
  );
}

export { useTodoStore };
export default TodoStoreProvider;
