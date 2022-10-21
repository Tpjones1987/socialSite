import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import View from "./View";
import Add from "./Add";
import Navbar from "./Navbar";

function App() {
  const [todos, changeTodos] = useState([]);
  useEffect(() => {
    const stringFromLS = localStorage.getItem("list");
    changeTodos(JSON.parse(stringFromLS) || []);
  }, []);

  function updateVal(value) {
    console.log();
  }

  function updateMyValues(value) {
    changeTodos((prevValue) => {
      let newState = [...prevValue, value];
      localStorage.setItem("list", JSON.stringify(newState));
      return newState;
    });
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Add functionFromParent={(value) => updateMyValues(value)} />
          }
        />
        <Route
          path="/testing"
          element={
            <View
              todos={todos}
              functionFromParent={(value) => updateVal(value)}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
