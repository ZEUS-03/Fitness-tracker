import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../store/slice/workoutSlice";

import Modal from "./helper/Modal";

const ExerciseItem = ({ exercise }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.EXERCISE,
    item: { type: ItemTypes.EXPENSE, id: exercise?.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const onDelete = () => {
    dispatch(deleteExercise(exercise?.id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      ref={drag}
      className="border border-gray-300 rounded-md p-2 mb-2 bg-white shadow-sm"
    >
      <p className="font-bold text-sm uppercase mb-1">{exercise.name}</p>
      <div className="flex flex-col text-sm">
        <div className="mb-1">
          <strong className="mr-8">Date:</strong> {exercise.date}
        </div>
        <div className="mb-1">
          <strong className="mr-1">Duration:</strong> {exercise.duration} mins
        </div>
        <div className="mb-1">
          <strong className="mr-8">Type:</strong> {exercise.type}
        </div>
        {exercise.note && (
          <div className=" mb-1">
            <strong className="mr-7">Notes:</strong>
            <span>{exercise.note}</span>
          </div>
        )}
      </div>
      <div className="flex justify-around text-xs">
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(exercise.id)}
        >
          Delete
        </button>
      </div>
      <Modal
        exercise={exercise}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ExerciseItem;
