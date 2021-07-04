export function todocer(oldState = [], action) {
  // 根據action的訊息選擇動作
  switch (action.type) {
    case "ADD_TODO":
      // 展開舊狀態，加上新元素
      return [...oldState, action.todoStr];
    case "DELETE_TODO":
      // 過濾舊狀態，回傳不是我們要刪除的索引，跟 action 帶的參數做比較
      return oldState.filter((_, index) => index !== action.index);
    default:
      return oldState;
  }
}
