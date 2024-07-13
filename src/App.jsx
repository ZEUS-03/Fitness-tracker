import { useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewExercise from "./Components/NewExercise";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Components/Home";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistor } from "./store/store";

import "./App.css";
import WorkoutGraph from "./Components/workoutGraph";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/graph" element={<WorkoutGraph />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
