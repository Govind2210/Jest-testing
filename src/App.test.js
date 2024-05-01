import { render , screen } from "@testing-library/react";
import App from "./App";

test("testing the first case" ,()=>{
  render(<App/>); // import app
  // const test = screen.getByText("First Test Case!"); // fetch the text from the render  & this will check with case-senstive
  const test = screen.getByText(/First Test Case!/i); // fetch the text from the render  & This will Not  Check With Case-Senstive
  const title = screen.getByTitle("Google image");
  expect(test).toBeInTheDocument(); // we can have miltuple expect;
  expect(title).toBeInTheDocument();
})