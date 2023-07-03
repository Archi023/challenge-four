import React, { useState } from "react";
import "./index";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const state = useState();
  
  const [count, setCount] = useState(0);
  const [ctime, setCTime] = useState(newTime);

  const IncNum = () => {
    setCount(count + 1);
  };
  const IncTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCTime(newTime);
  };
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={IncNum}>click me</button>

        <h1>{ctime}</h1>
        <button onClick={IncTime}>Get Time</button>
      </center>
    </>
  );
};

export default App;
