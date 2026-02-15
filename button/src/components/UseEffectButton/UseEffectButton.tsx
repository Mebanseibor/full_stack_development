import { useState, useEffect } from "react";

const countThreshold = 5;

export default function UseEffectButton() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  function CompletionSection() {
    useEffect(() => {
      console.log(`Setup code started with count as ${count}`);

      if (count >= countThreshold) {
        setIsShown(true);
      }

      return () => {
        console.log(`Clean up code with count as ${count}`);
        setIsShown(false);
      };
    }, [count]);

    if (isShown) {
      return (
        <>
          <p className="text">
            Congrats, you've clicked the above button {count} times
          </p>

          <button className="btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </>
      );
    }
  }

  return (
    <>
      <p className="text">
        Click the button below at least {countThreshold} times:
      </p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <CompletionSection />
    </>
  );
}
