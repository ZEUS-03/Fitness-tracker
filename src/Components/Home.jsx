import React, { useState } from "react";
import NewExercise from "./NewExercise";
import Board from "./Board";

const Home = () => {
  return (
    <>
      <h1 className="text-center font-bold text-xl my-3">Workout tracker</h1>
      <Board />
    </>
  );
};

export default Home;
