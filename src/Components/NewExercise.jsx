import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkout } from "../store/slice/workoutSlice";
import { v4 as uuidv4 } from "uuid";
import Input from "./helper/Input";

import { WORKOUTS } from "../constants";

const NewExercise = ({ isOpen, onClose }) => {
  const [newExercise, setNewExercise] = useState("");
  const [exerciseCat, setExerciseCat] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseNote, setExerciseNote] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    let hasError = false;

    if (newExercise.trim() === "") {
      setError("Exercise name is required");
      hasError = true;
      return;
    }

    if (exerciseDuration.trim() === "") {
      setError("Exercise duration is required");
      hasError = true;
      return;
    } else if (isNaN(exerciseDuration)) {
      setError("Exercise duration must be a number");
      hasError = true;
      return;
    }

    if (exerciseDate.trim() === "") {
      setError("Exercise date is required");
      hasError = true;
      return;
    }
    if (exerciseType.trim() === "") {
      setError("Exercise type is required");
      hasError = true;
      return;
    }

    if (exerciseCat.trim() === "") {
      setError("Exercise category is required");
      hasError = true;
      return;
    }

    if (hasError) {
      return;
    }

    console.log("Exercise submitted successfully!");

    const data = {
      id: uuidv4(),
      name: newExercise,
      duration: exerciseDuration,
      date: exerciseDate,
      note: exerciseNote,
      workout: exerciseCat,
      type: exerciseType,
    };

    setNewExercise("");
    setExerciseDuration("");
    setExerciseDate("");
    setExerciseNote("");
    setExerciseCat("");
    setExerciseType("");

    dispatch(addWorkout(data));
    onClose(false);
  };

  return (
    <>
      {isOpen && (
        <div
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Add new Exercise
                </h3>
                <button
                  onClick={() => {
                    onClose(false);
                  }}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4">
                {error != "" && (
                  <div className="text-left text-red-600 mb-4">{error}</div>
                )}
                <form className="space-y-4">
                  <Input
                    label={"Exercise name"}
                    onChange={setNewExercise}
                    value={newExercise}
                    type={"text"}
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                  />

                  <div>
                    <label
                      htmlFor="workout"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Workout name
                    </label>
                    <select
                      name="workout"
                      id="workout"
                      value={exerciseCat}
                      onChange={(e) => setExerciseCat(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    >
                      <option value="">Please select a workout</option>
                      {WORKOUTS.map((workout) => {
                        return (
                          <option value={workout.name} key={workout.id}>
                            {workout.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <Input
                    label={"Exercise Duration (In minutes)"}
                    onChange={setExerciseDuration}
                    value={exerciseDuration}
                    type={"number"}
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                  />

                  <Input
                    label={"Exercise Date"}
                    onChange={setExerciseDate}
                    value={exerciseDate}
                    type={"date"}
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                  />
                  <Input
                    label={"Exercise Type"}
                    onChange={setExerciseType}
                    value={exerciseType}
                    type={"text"}
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                  />
                  <Input
                    label={"Notes"}
                    onChange={setExerciseNote}
                    value={exerciseNote}
                    type={"textarea"}
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                  />

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Create exercise
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewExercise;
