import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExercise } from "../../store/slice/workoutSlice";
import { deleteExercise } from "../../store/slice/workoutSlice";
import Input from "./Input";

const Modal = ({ exercise, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (exercise) {
      setName(exercise?.name);
      setDuration(exercise?.duration);
      setDate(exercise?.date);
      setNote(exercise?.note);
      setType(exercise?.type);
    }
  }, [exercise]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration || !date || !type) {
      return;
    }
    const updatedExercise = {
      id: exercise?.id,
      name,
      date,
      note,
      type,
      duration,
    };

    dispatch(
      updateExercise({
        id: exercise?.id,
        updatedExercise,
      })
    );

    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      tabIndex="-1"
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Edit Exercise
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-4">
              <Input
                label={"Exercise name"}
                onChange={setName}
                value={name}
                type={"text"}
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
                required={true}
              />
              <Input
                label={"Exercise Duration (In minutes)"}
                onChange={setDuration}
                value={duration}
                type={"number"}
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
                required={true}
              />
              <Input
                label={"Exercise Date"}
                onChange={setDate}
                value={date}
                type={"date"}
                required={true}
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
              />
              <Input
                label={"Exercise Type"}
                onChange={setType}
                value={type}
                type={"text"}
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
                required={true}
              />
              <Input
                label={"Notes"}
                onChange={setNote}
                value={note}
                type={"textarea"}
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
              />
            </div>
            <div className="text-end pt-4 border-t">
              <button
                type="submit"
                className="border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 rounded-md p-2"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
