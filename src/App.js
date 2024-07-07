import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 element-id="div-test-h1" data-testid="div-test-h2">
          RTQ - Overriding data-testid
        </h1>
        <div data-testid="div-test-id">Testing ID 1</div>
        <div data-testid="div-test-id">Testing ID 2</div>
      </div>
    </>
  );
}

export default App;
