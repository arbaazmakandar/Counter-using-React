import "./styles.css";
import React from "react";
import Counter from "./Counter";
export default function Counters(props) {
  const { counters, onDelete, onIncrement, onReset } = props;
  return (
    <>
      {/* 
    && in JS, if statement1 is true returns statement 2
    else returns statement 1; */}
      {/* 
    When 0, returns counters.length>0 which is false
    and for {false} nothing is displayed on screen */}

      <button onClick={onReset}>Reset</button>
      {counters.length > 0 && (
        <div>There are {counters.length} items in your cart.</div>
      )}
      {counters.length !== 0
        ? counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              onDelete={onDelete}
              onIncrement={onIncrement}
            />
          ))
        : "There are no items in your cart."}
    </>
  );
}
