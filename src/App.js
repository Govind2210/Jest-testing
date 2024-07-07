import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 element-id="div-test-h1" data-testid="div-test-h2">
          RTQ - Assertion Methods
        </h1>
        <input
          type="text"
          id="user-name"
          defaultValue={"gogo"}
          name="userName"
          className="test-style dummy"
          data-test="test"
        />
        <button className="btn1" id="btn-id">
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
