import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/reducer/todo-reducer";

export const Card = ({ firstName, lastName, id }) => {
  const [newFirstName, setNewFirstName] = React.useState(firstName);
  const [newLastName, setNewLastName] = React.useState(lastName);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodo({ id }));
  };

  const editItem = () => {
    const editedFirstName = prompt(
      "Enter new first name:",
      newFirstName
    )?.trim();
    const editedLastName = prompt("Enter new last name:", newLastName)?.trim();

    if (editedFirstName && editedLastName) {
      dispatch(
        editTodo({
          id,
          newFirstName: editedFirstName,
          newLastName: editedLastName,
        })
      );
      setNewFirstName(editedFirstName);
      setNewLastName(editedLastName);
    } else {
      alert("First Name and Last Name cannot be empty or just spaces.");
    }
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 flex justify-between items-center flex-wrap">
      <div className="flex-1 min-w-[100px] mb-3">
        <p className="font-bold text-gray-700">{newFirstName}</p>
        <p className="text-gray-500">{newLastName}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={deleteItem}
          className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={editItem}
          className="py-1 px-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
