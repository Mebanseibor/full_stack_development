import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button className="btn" onClick={handleCount}>
        You clicked me {count} times
      </button>
    </>
  );
}
