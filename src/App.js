import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [click, setClick] = useState("");
  console.log("data==>", data);
  return (
    <>
      <div className="App">
        <h1>Input test onChange case!</h1>
        <input
          type="text"
          value={data}
          placeholder="Enter the Name"
          name="userName"
          id="userId"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <br />
      </div>
      <div className="App">
        <h1>Input test onclick case! withn button</h1>
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
