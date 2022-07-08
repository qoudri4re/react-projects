import React from "react";
import check_image from "./images/icon-check.svg";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoItem({ title, deleteTodo, id, editTodo, checkTodo, status }) {
  return (
    <div className={`item border ${status} todo_content_delete`}>
      <div className="image-bg" onClick={() => checkTodo(id)}>
        <img src={check_image} alt="" />
      </div>
      <p>{title}</p>
      <div className="buttons">
        <FaTrash onClick={() => deleteTodo(id)} className="delete" />
        <FaEdit onClick={() => editTodo(id)} className="edit" />
      </div>
    </div>
  );
}
export default TodoItem;
