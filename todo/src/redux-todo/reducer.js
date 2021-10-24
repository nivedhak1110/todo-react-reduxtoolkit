import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoReducer = createSlice({
  name: "todoapp",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos =
        action.payload.id === "all"
          ? []
          : state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = TodoReducer.actions;
export const reducer = TodoReducer.reducer;
