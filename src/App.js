import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [click, setClick] = useState("");
  return (
    <>
      <div className="App">
        <h1>Hook testing</h1>
        <button
          onClick={() => {
            setClick("UPDATED DATA!!!!");
          }}
        >
          Update Data
        </button>
        <h1>{click}</h1>
      </div>
    </>
  );
}

export default App;
