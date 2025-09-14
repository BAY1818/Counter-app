import React, { useState} from "react";
import "./App.css";
const App = () => {
  //Counter is a state intialized to 0
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
}