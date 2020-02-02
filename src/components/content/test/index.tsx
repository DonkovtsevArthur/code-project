import React, { useState } from "react";

const Test: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    let ind = counter;
    return setCounter(++ind);
  };

  if (counter === 5) {
    // Simulate a JS error
    throw new Error("I crashed!");
  }

  return <button onClick={handleClick}>A</button>;
};

export default Test;
