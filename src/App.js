import "./App.css";

function App() {
  let login = false;
  return (
    <>
      <div className="App">
        <h1 element-id="div-test-h1" data-testid="div-test-h2">
          RTQ - QueryBy and QueryAllBy
        </h1>
        {login ? (
          <button className="btn1" id="btn-id">
            Login
          </button>
        ) : (
          <button className="btn1" id="btn-id">
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default App;
