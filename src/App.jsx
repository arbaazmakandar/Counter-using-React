import React from "react";
import ReactDOM from "react-dom";
import Counters from "./Counters";
import Navbar from "./Navbar";
import "./styles.css";

export default function App(props) {
  const [counters, setCounters] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 7 }
  ]);
  const handleDelete = function (id) {
    const filteredCounters = counters.filter((counter) => counter.id !== id);
    setCounters(filteredCounters);
  };
  const handleIncrement = function (id) {
    const incrementedCounter = counters.map((counter) => {
      if (counter.id === id) {
        counter.value++;
      }
      return counter;
    });

    setCounters(incrementedCounter);
  };

  const handleReset = function () {
    const resettedCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    setCounters(resettedCounters);
  };
  const getCount = () => {
    let count = 0;
    counters.forEach((counter) => {
      count += counter.value;
      return counter;
    });
    return count;
  };
  return (
    <>
      <Navbar count={getCount()} />
      <Counters
        counters={counters}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onReset={handleReset}
      />
    </>
  );
}
