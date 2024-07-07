import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 id="divtextOne" data-testid="div-test-h2">
          RTQ - Querying Within Elements
        </h1>
        <div>
          Hello World
          <p>Hello</p>
          <p>Hi</p>
          <p>Hey</p>
        </div>
      </div>
    </>
  );
}

export default App;
