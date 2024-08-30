import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("todo") || {
  todoList: [],
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    totalCount: (state) => {
      return { ...state, count: state.todoList.length };
    },
    addTodo: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    editTodo: (state, action) => {
      const { id, newFirstName, newLastName } = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);

      if (todo) {
        if (newFirstName.trim() && newLastName.trim()) {
          todo.firstName = newFirstName.trim();
          todo.lastName = newLastName.trim();
        } else {
          console.warn(
            "First Name and Last Name cannot be empty or just spaces."
          );
        }
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, totalCount, editTodo } = todoSlice.actions;
