import logo from "./logo.svg";
import "./App.css";
import TodoList, { TodoStoreProvider } from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoStoreProvider>
        <TodoList />
      </TodoStoreProvider>
    </div>
  );
}

export default App;
