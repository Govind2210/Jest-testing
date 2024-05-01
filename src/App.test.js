import { render , screen } from "@testing-library/react";
import App from "./App";

/**
 * Press a to run all tests.
 › Press f to quit "only failed tests" mode.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
 */



test("testing the input field",()=>{
  render(<App/>); // import app
  const input = screen.getByRole('textbox'); // textbox is use to check is there any input fields is there or not.
  const inputPlaceholder = screen.getByPlaceholderText("Enter the Name");
  expect(input).toBeInTheDocument(); // using this for attribute below 
  expect(inputPlaceholder).toBeInTheDocument();  // checking placeholder
  // checking the attribute
  expect(inputPlaceholder).toHaveAttribute("name","userName") // checking the attribute
  expect(inputPlaceholder).toHaveAttribute("id","userId") // chcking the ID
})