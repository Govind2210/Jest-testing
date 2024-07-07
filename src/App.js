import { useState } from "react";
import "./App.css";
import { Usr } from "./Usr";

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h1 id="divtextOne" data-testid="div-test-h2">
          Test component Props
        </h1>
        <Usr name={"gogo"} />
      </div>
    </>
  );
}

export default App;
