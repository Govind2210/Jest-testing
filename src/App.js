import { useState } from "react";
import "./App.css";
import { Usr } from "./Usr";

function App(props) {
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h1 id="divtextOne" data-testid="div-test-h2">
        Functional Props Testing and Function Mocking
        </h1>
        <button onClick={props.testFunction}>Click</button>
      </div>
    </>
  );
}

export default App;
