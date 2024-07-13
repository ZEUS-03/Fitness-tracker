import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveExercise } from "../store/slice/workoutSlice";
import { ItemTypes } from "../constants";
import ExpenseItem from "./ExerciseItem";
import { useSelector } from "react-redux";

const WorkoutList = ({ workout }) => {
  const dispatch = useDispatch();

  const activity = useSelector((state) => state.workout.workout);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.EXERCISE,
    drop: (item, monitor) => {
      dispatch(
        moveExercise({ exerciseId: item.id, targetWorkout: workout.name })
      );
    },
  });

  return (
    <div ref={drop} className="flex items-start p-4 mr-4">
      <div className=" pr-4 w-1/2" id="parent1">
        <h3 className="mb-2 font-semibold" key={workout?.id}>
          {workout?.name}
        </h3>
      </div>
      <div className="items-start" id="parent2">
        <div className="flex flex-col min-w-64">
          {activity
            ?.filter((item) => item?.workout === workout?.name)
            ?.map((item) => (
              <ExpenseItem key={item.id} exercise={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
