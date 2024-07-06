/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// on change testing function
test("change event testing", () => {
  render(<App />);
  let inputField = screen.getByRole("textbox");
  fireEvent.change(inputField, { traget: { value: "abc" } });
  expect(inputField.value).toBe("abctest");
});

test("on click event test", () => {
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("UPDATED DATA!!!!")).toBeInTheDocument();
});
