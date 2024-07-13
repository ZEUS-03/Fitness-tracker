import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  workout: [],
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      if (!state.workout) {
        state.workout = [];
      }
      state.workout.push(action.payload);
    },
    updateExercise: (state, action) => {
      const { id, updatedExercise } = action.payload;

      const existingExerciseIndex = state.workout.findIndex((e) => e.id === id);
      if (existingExerciseIndex !== -1) {
        const existingExercise = state.workout[existingExerciseIndex];

        const updatedExperciseObject = {
          ...existingExercise,
          ...updatedExercise,
          workout: existingExercise.workout,
        };

        state.workout[existingExerciseIndex] = updatedExperciseObject;
      }
    },
    deleteExercise: (state, action) => {
      const id = action.payload;

      const existingExerciseIndex = state.workout.findIndex((e) => e.id === id);
      if (existingExerciseIndex !== -1) {
        state.workout.splice(existingExerciseIndex, 1);
      }
    },
    moveExercise: (state, action) => {
      const { exerciseId, targetWorkout } = action.payload;
      const exercise = state.workout.find((e) => e.id === exerciseId);
      exercise.workout = targetWorkout;
    },
  },
});

export const { addWorkout, moveExercise, updateExercise, deleteExercise } =
  workoutSlice.actions;
export default workoutSlice.reducer;
