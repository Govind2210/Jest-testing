import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 500);
  }, []);
  return (
    <>
      <div className="App">
        <h1 element-id="div-test-h1" data-testid="div-test-h2">
          RTQ - FindBy and FindAllBy
        </h1>
        {/* <h1>Data Found</h1> */}
        {data ? <h1>Data Found</h1> : <h1>No data is Found</h1>}
      </div>
    </>
  );
}

export default App;
