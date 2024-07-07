import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>RTQ - getByLabelText</h1>
        <label htmlFor="user-name">User Name</label>
        <input type="text" id="user-name" defaultValue={"gogo"} />
        <br />
        <br />
        <label htmlFor="skills">Skills</label>
        <input type="checkbox" id="skills" />
      </div>
    </>
  );
}

export default App;
