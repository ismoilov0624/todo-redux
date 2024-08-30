import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import countSlice from "./reducer/count-reducer";
import todoSlice from "./reducer/todo-reducer";
import { saveState } from "../config/storage";
import { addTodo, deleteTodo, totalCount } from "./reducer/todo-reducer";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addTodo, deleteTodo),
  effect: (action, api) => {
    api.dispatch(totalCount());
  },
});

export const store = configureStore({
  reducer: {
    countt: countSlice,
    todo: todoSlice,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(storageMiddlware.middleware);
  },
});

store.subscribe(() => {
  saveState("todo", store.getState().todo);
});
