import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todos: [
      {
        title: "abdullah",
        id: nanoid(),
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload.index, 1);
    },
    updateTodo: (state, action) => {
      state.todos({
        title: action.payload.title,
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
