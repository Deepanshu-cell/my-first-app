import React from "react";
import "./Counter.css";

function Counter() {
  let x = 5;
  let [count, setCount] = React.useState(0);

  let [countString, setCountString] = React.useState("");

  let increment = () => {
    setCount(count + x);
    setCountString("Incremented");
  };

  let decrement = () => {
    setCount(count - x);
    setCountString("Decremented");
  };

  return (
    <div className="counter">
      <h1>counter {countString}</h1>
      <div>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
        <span className="count">{count}</span>
        <button className="btn btn-danger" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
