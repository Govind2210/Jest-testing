import { useState } from "react";
import "./App.css";
import handleTestCase from "./helper";

function App() {
  const [click, setClick] = useState("");
  const handlOnClick = () => {
    setClick("Hello");
  };

  // so what if we want to test this function but we unable to test this in side this function component but we can test this in class component
  // it tuff to extract the function 
  // solution : - make a class component or take this function outside of this function 
  // const handleTestCase = () => {
  //   console.log("heelo");
  //   return 1;
  // };

  return (
    <>
      <div className="App">
        <h1>Function Component Testing!</h1>
        <button data-testId="btn-1" onClick={handlOnClick}>
          Update Data
        </button>
        <button onClick={handleTestCase}>Print Hi</button>
        <h2>{click}</h2>
      </div>
    </>
  );
}

export default App;
