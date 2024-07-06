import { render, screen } from "@testing-library/react";
import App from "./App";

test("tetsing the RTQ - get by role", () => {
  render(<App />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("hello")
});

test("button testing", () => {
  render(<App />);
  const buttonClick = screen.getByRole("button");
  expect(buttonClick).toBeInTheDocument();
 
});