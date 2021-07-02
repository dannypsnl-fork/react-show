import React from "react";

type TodoItemProps = {
  text: string;
  index?: number;
  deleteTodo: (index: number) => void;
};

function TodoItem({ text, index, deleteTodo }: TodoItemProps) {
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
