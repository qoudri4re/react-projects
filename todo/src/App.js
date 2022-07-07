import React, { useState } from "react";
import TodoItem from "./Item";
import "./style.css";
import sun_image from "./images/icon-sun.svg";
import moon_image from "./images/icon-moon.svg";
import Message from "./Message";
import Views from "./Views";

function App() {
  const [mode, setMode] = useState("container-light");
  const [toogleImage, setToogleImage] = useState(sun_image);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [currentView, setCurrentView] = useState("all");
  const [message, setMessage] = useState("no task available");

  const TodoItems = list.map((item) => {
    if (currentView === "all") {
      return (
        <TodoItem
          title={item.title}
          id={item.id}
          deleteTodo={deleteTodo}
          key={item.id}
          status={item.status}
          editTodo={editTodo}
          checkTodo={checkTodo}
        />
      );
    } else if (currentView === "active") {
      if (item.status === "uncompleted") {
        return (
          <TodoItem
            title={item.title}
            id={item.id}
            deleteTodo={deleteTodo}
            key={item.id}
            status={item.status}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        );
      }
    } else {
      if (item.status === "completed") {
        return (
          <TodoItem
            title={item.title}
            id={item.id}
            deleteTodo={deleteTodo}
            key={item.id}
            status={item.status}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        );
      }
    }
  });
  function toogleMode() {
    if (mode === "container-light") {
      setMode("container-dark");
      setToogleImage(sun_image);
    } else {
      setMode("container-light");
      setToogleImage(moon_image);
    }
  }

  function setTodoName(event) {
    setName(event.target.value);
  }

  function addTodo(event) {
    if (event.key === "Enter") {
      if (!isEditing && name != "") {
        const newItem = {
          id: new Date().getTime().toString(),
          title: name,
          status: "uncompleted",
        };
        setList([...list, newItem]);
        setName("");
      } else if (isEditing && name != "") {
        setList(
          list.map((item) => {
            if (item.id == editId) {
              return { ...item, title: name };
            } else {
              return item;
            }
          })
        );
        setName("");
        setIsEditing(false);
        setEditId(null);
      }
    }
  }

  function deleteTodo(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function editTodo(id) {
    setIsEditing(true);
    const specificItem = list.find((item) => item.id === id);
    setEditId(specificItem.id);
    setName(specificItem.title);
  }

  function checkTodo(id) {
    setList(
      list.map((item) => {
        if (item.id == id) {
          if (item.status === "uncompleted") {
            setCompletedTodos(completedTodos + 1);
            return { ...item, status: "completed" };
          } else {
            setCompletedTodos(completedTodos - 1);
            return { ...item, status: "uncompleted" };
          }
        } else {
          return item;
        }
      })
    );
  }

  function clearCompleted() {
    setList(list.filter((item) => item.status !== "completed"));
  }

  function changeView(view) {
    setCurrentView(view);
  }
  return (
    <div className={`container ${mode}`} id="theme">
      <div className="todo-list">
        <div className="item"></div>
        <div className="item item-1">
          <div className="heading">
            <h2>TODO</h2>

            <img
              src={toogleImage}
              alt=""
              id="theme-toogle"
              onClick={toogleMode}
            />
          </div>
        </div>
        <div className="item item-2">
          <input
            type="text"
            placeholder="create new todo"
            id="todo-input"
            value={name}
            onChange={setTodoName}
            onKeyPress={addTodo}
          />
        </div>
        <div className="item item-3">
          <div className="lists" id="todo-container">
            {TodoItems.length > 0 ? TodoItems : <Message message={message} />}

            <div className="item item-bottom">
              <span id="item-left">
                {list.length - completedTodos}{" "}
                {list.length - completedTodos === 1 ? "item" : "items"} left
              </span>
              <div className="middle">
                <Views currentView={currentView} changeView={changeView} />
              </div>
              <span
                className="clear"
                id="clear-completed-task"
                onClick={clearCompleted}
              >
                clear completed
              </span>
            </div>
            <span id="empty-task"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
