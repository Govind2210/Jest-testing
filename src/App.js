import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>RTQ - getAllByLabelText</h1>
        <label htmlFor="user-name">User Name:</label>{" "}
        <input type="text" id="user-name" defaultValue={"gogo"} />
        <br />
        <br />
        <label htmlFor="user-name1">User Name:</label>{" "}
        <input type="text" id="user-name1" defaultValue={"gogo"} />
        <br />
        <br />
        <label htmlFor="user-name2">User Name:</label>{" "}
        <input type="text" id="user-name2" defaultValue={"gogo"} />
      </div>
    </>
  );
}

export default App;
