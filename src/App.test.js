import App from "./App";
const { screen, render } = require("@testing-library/react");

test("Single - List of Postive -  Assertion Methods", () => {
  render(<App />);
  const newInput = screen.getByRole("textbox");
  // test case for Assertion methods

  expect(newInput).toBeInTheDocument();
  expect(newInput).toHaveValue();
  expect(newInput).toHaveValue("gogo");
  expect(newInput).toBeEnabled();
  // expect(newInput).toBeDisabled(); // if its disabled
  expect(newInput).toHaveAttribute("id");
  expect(newInput).toHaveAttribute("data-test");
  expect(newInput).toHaveClass("test-style");
  expect(newInput).toHaveClass("dummy");
});

test("Single - List of negative -  Assertion Methods", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  // test case for Assertion methods
  expect(btn).toBeInTheDocument();
  // expect(btn).toHaveClass('btn');
  expect(btn).not.toHaveClass("btn"); // it wil work when class name is difffent then the given one
  expect(btn).not.toHaveAttribute("id"); //same it will check for id and if it found it will give error
});
