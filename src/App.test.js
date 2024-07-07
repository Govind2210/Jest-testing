import App from "./App";
const { screen, render, configure } = require("@testing-library/react");

configure({ testIdAttribute: "element-id" });

test("Single - getByDisplayValue", () => {
  render(<App />);
  const newInput = screen.getByDisplayValue("gogo");
  expect(newInput).toBeInTheDocument();

  const textArea = screen.getByDisplayValue("govind L");
  expect(textArea).toBeInTheDocument();
});

test("Single - radio - getByDisplayValue", () => {
  render(<App />);
  const newRadio = screen.getByDisplayValue("male");
  expect(newRadio).toBeInTheDocument();
});
