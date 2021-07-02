import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import MarkdownEditor from "./MDEditor";

const Home = () => <div>Home Page</div>;

const Routes = () => (
  <Router>
    <ul
      style={{
        listStyleType: "circle",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todolist">TodoList</Link>
      </li>
      <li>
        <Link to="/editor">Markdown Editor</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/editor" component={MarkdownEditor} />
    <Route path="/todolist" component={TodoList} />
  </Router>
);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React-Todo</h1>
      </header>
      <Routes />
    </div>
  );
}
