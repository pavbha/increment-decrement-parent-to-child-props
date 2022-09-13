import "./styles.css";
import { useState } from "react";
import IncrementFunction from "./IncrementFunction";
import DecrementFunction from "./DecrementFunction";
import Display from "./Display";

export default function App() {
  const [counter, setCounter] = useState(1);
  const IncrementCounter = () => setCounter(counter + 1);
  let DecrementCounter = () => setCounter(counter - 1);
  // if (counter <= 1) {
  //   DecrementCounter = () => setCounter(1);
  // }

  return (
    <div>
      <IncrementFunction increment={IncrementCounter} />
      <DecrementFunction decrement={DecrementCounter} />
      <Display message={counter} />
    </div>
  );
}
