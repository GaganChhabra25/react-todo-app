import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/Todo/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [items, addItems] = useState([]);

  const handleFormSubmit = (item) => {
    const newItems = [...items, item];
    addItems(newItems);
  };

  const handleDelete = (item) => {
    const updatedItems = items.filter(
      (existingItem) => existingItem.id !== item.id
    );
    addItems(updatedItems);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <TodoForm handleFormSubmit={handleFormSubmit} />
        <TodoList items={items} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
export default App;
