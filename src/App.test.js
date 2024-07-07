import App from "./App";
const { screen, render } = require("@testing-library/react");

test("SIngle - getByTestId", () => {
  render(<App />);
  const testingId = screen.getByTestId("div-test-h1");
  expect(testingId).toBeInTheDocument();
});

test("Multiple - getAllByTestId", () => {
  render(<App />);
  const testingIds = screen.getAllByTestId("div-test-id");
  
  for(let i = 0 ; i < testingIds.length ; i++ ){
    expect(testingIds[i]).toBeInTheDocument();
  }

});
