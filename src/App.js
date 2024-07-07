import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 data-testid="div-test-h1">RTQ - getByTestId and getAllByTestId</h1>
        <div data-testid="div-test-id">Testing ID 1</div>
        <div data-testid="div-test-id">Testing ID 2</div>
      </div>
    </>
  );
}

export default App;
