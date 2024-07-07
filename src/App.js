import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 element-id="div-test-h1" data-testid="div-test-h2">
          RTQ - getByDisplayValue and getAllByDisplayValue
        </h1>
        <input type="text" defaultValue={"gogo"} />
        <br />
        <br />
        <textarea defaultValue={"govind L"} />
        <br />
        <br />
        <input type="radio" defaultValue={"male"} />
      </div>
    </>
  );
}

export default App;
