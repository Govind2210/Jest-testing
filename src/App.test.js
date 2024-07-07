import App from "./App";
const { screen, render , configure } = require("@testing-library/react");

configure({testIdAttribute: 'element-id'})

test("Single - Overriding data-testid", () => {
  render(<App />);
  const testingH1 = screen.getByTestId("div-test-h1");
  expect(testingH1).toBeInTheDocument();
});

