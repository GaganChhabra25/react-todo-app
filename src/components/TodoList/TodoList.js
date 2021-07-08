import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todoList">
      <h3>Todos List</h3>
      {props.items.map((item, i) => {
        return (
          <div className="item" key={i}>
            <h3>{item.name}</h3>
            <label>{item.description}</label>
            <button onClick={(i) => props.handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
