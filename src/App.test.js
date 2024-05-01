import { render , screen } from "@testing-library/react";
import App from "./App";

/**
 * To have Attribute is used for checking the Attribute in the given Tags
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