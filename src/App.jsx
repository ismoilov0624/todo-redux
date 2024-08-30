import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/reducer/todo-reducer";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "./components/card";

function App() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { todoList, count } = useSelector((state) => state.todo);

  const submit = (data) => {
    dispatch(addTodo({ ...data, id: nanoid() }));
    reset();
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <p className="text-center text-2xl mb-5">Total Todos: {count}</p>
      <form onSubmit={handleSubmit(submit)} className="grid gap-4 mb-5">
        <div>
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
      <div className="grid gap-4">
        {todoList?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
