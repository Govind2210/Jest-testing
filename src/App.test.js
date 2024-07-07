import App from "./App";
const { screen, render, within } = require("@testing-library/react");

test("within - Querying Within Elements", () => {
  render(<App />);
  let el = screen.getByText('Hello World');
  let subEl = within(el).getByText('Hi')
  expect(el).toBeInTheDocument();
  expect(subEl).toBeInTheDocument();
  
});
