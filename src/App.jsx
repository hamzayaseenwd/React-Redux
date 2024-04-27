import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
} from "./config/redux/reducers/todoSlice";

const App = () => {
  //get value from form
  const todoRef = useRef();

  // get data from redux
  const selector = useSelector((state) => state.todos);
  console.log(selector);

  // data bhejna ka liya
  const dispatch = useDispatch();

  //addTodo
  const addingTodo = (event) => {
    event.preventDefault();
    // console.log(todoRef.current.value);
    dispatch(
      addTodo({
        title: todoRef.current.value,
      })
    );
    todoRef.current.value = "";
  };
  // updateTodo
  const updatingTodo = () => {
    updateValue = prompt("enter your value")
    console.log(updateValue);
    dispatch(
      updateTodo({
        title: updateValue,
      })
    );
  };

  //delete Todo
  const deleteTodo = (index) => {
    console.log(index);
    dispatch(
      removeTodo({
        index: index,
      })
    );
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addingTodo}>
        <input type="text" placeholder="enter todo" ref={todoRef} />
        <button type="submit">click</button>
      </form>
      <ul>
        {selector.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => updatingTodo(index)}>edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default App;
