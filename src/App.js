import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* simentic element  */}
        <h1>Multiple role with Element</h1>
        <h1>Custom Role</h1>
        <button>Click One</button>
        <button>Click two</button>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName"/>
        <label htmlFor="userAge">User Age</label>
        <input type="text" id="userAge"/>

        {/* non - simentic element  */}
        <div role="dummy">
          dummy test
        </div>
      </div>
    </>
  );
}

export default App;
