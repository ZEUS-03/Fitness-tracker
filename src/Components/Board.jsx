// Board.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WorkoutList from "./WorkoutList";
import { WORKOUTS } from "../constants";
import NewExercise from "./NewExercise";

const Board = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center p-8">
        <div className="flex justify-between w-full max-w-4xl mb-4">
          <h1 className="text-left ml-3 font-bold">Workout name</h1>
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-md"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add new
          </button>
        </div>
        <div className="flex flex-col w-full max-w-4xl">
          {WORKOUTS.map((workout) => (
            <WorkoutList key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
      <NewExercise isOpen={isOpen} onClose={setIsOpen} />
    </DndProvider>
  );
};

export default Board;
