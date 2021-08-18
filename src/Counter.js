import "./styles.css";
import React from "react";
export default function Counter(props) {
  const { id, value, onDelete, onIncrement } = props;
  //props object are read only

  return (
    <div className="counter">
      <span className={value === 0 ? "red" : "green"}>
        {value === 0 ? "Zero" : value}
      </span>
      <button onClick={() => onIncrement(id)}>Increment</button>
      <button onClick={() => onDelete(id)}>Delete</button>
      {/* OnDelete is handleDelete function called from Counters.jsx*/}
    </div>
  );

  //0 'Zero' Red
  //Any other number 4 Green
}
