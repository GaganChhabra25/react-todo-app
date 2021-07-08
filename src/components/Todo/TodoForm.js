import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import "./TodoForm.css";

const TodoForm = (props) => {
  const enteredTodoRef = useRef("");
  const enteredTodoDescriptionRef = useRef("");

  const [name, setTodo] = useState("");
  const [description, setDescription] = useState("");

  const handleEnteredTodoRef = (value) => {
    console.log(enteredTodoRef.current.value);
    setTodo(enteredTodoRef.current.value);
  };

  const handleEnteredTodoDescriptionRef = (value) => {
    console.log(enteredTodoDescriptionRef.current.value);
    setDescription(enteredTodoDescriptionRef.current.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("todo name ", name);
    console.log("todo description ", description);
    const item = { "id": uuid(), "name": name , "description": description};
    props.handleFormSubmit(item);
  };

  return (
    <form className="todoForm" onSubmit={onFormSubmit}>
      <h3>Add a Todo</h3>
      <label>Todo title</label>
      <input
        ref={enteredTodoRef}
        type="text"
        placeholder="Enter todo"
        value={name}
        onChange={handleEnteredTodoRef}
      />
      <label>Todo description</label>
      <input
        ref={enteredTodoDescriptionRef}
        type="text"
        placeholder="Enter todo"
        value={description}
        onChange={handleEnteredTodoDescriptionRef}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
