import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h1 id="divtextOne" data-testid="div-test-h2">
          Act function
        </h1>
        {<h1>{data}</h1>}
        <input
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
          placeholder="Name"
        />
      </div>
    </>
  );
}

export default App;
