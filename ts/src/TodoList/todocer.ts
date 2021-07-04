// 這裡限制 Action 的型別，一定有 type 所以是 string
//
// 不一定有 index 跟 todoStr，所以是?(optional)
// Because we would use it as ADD or DELETE action
type TodoAction = {
  type: string;
  index?: number;
  todoStr?: string;
};
// reducer 舊狀態:型別=初始狀態 action:限制
function todocer(oldState: string[] = [], action: TodoAction): string[] {
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

export { todocer };
