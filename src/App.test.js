/* eslint-disable testing-library/no-node-access */
import App from "./App";
const { screen, render } = require("@testing-library/react");

test("Elements with JavaScript - Custom Query", () => {
  render(<App />);
  const element = document.querySelector("#divtext");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('Hello World');
});
