import { useRef } from "react";
import "./style.css";

import MyInput from "./MyInput";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="input-wrapper">
      <MyInput ref={inputRef} placeholder="This is the place holder" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
