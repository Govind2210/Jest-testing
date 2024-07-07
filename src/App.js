import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("RTQ - Click Event with User");
  return (
    <>
      <div className="App">
        <h1 id="divtextOne" data-testid="div-test-h2">
          {data}
        </h1>
        <button
          onClick={() => {
            setData("RTQ - Click Event with User Event Library");
          }}
        >
          Cick Me
        </button>
      </div>
    </>
  );
}

export default App;
