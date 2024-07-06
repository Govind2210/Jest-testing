import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * SO here i have learn
 * only:- SO if we use only on any descriobe :- it will test that describe or the test function
 * skip :- if you dont want to test that function and add only to other function it will will skipped that test
 * Nested:- so we can describe the  inside the describe function or any test cases
 */

test("testing the input field", () => {
  render(<App />);
  const input = screen.getByRole("textbox"); // textbox is use to check is there any input fields is there or not.
  const inputPlaceholder = screen.getByPlaceholderText("Enter the Name");
  expect(input).toBeInTheDocument(); // using this for attribute below
  expect(inputPlaceholder).toBeInTheDocument(); // checking placeholder
  // checking the attribute
  expect(inputPlaceholder).toHaveAttribute("name", "userName"); // checking the attribute
  expect(inputPlaceholder).toHaveAttribute("id", "userId"); // chcking the ID
});

describe.only("Testing the Group describe for UI", () => {
  // only is used for for selecting the testing if it is not only they will be skipped
  test("test case 1", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("test case 2", () => {
    render(<App />);
  });

  test("test case 3", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
  });
});

describe.only("API Test Case", () => {
  test("API test case 1", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("API test case 2", () => {
    render(<App />);
  });

  test("API test case 3", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
  });

  describe("innser describe test case",()=>{
    test("Inner test case for API test case 1", () => {
      render(<App />);
      const input = screen.getByRole("textbox");
    });
  })
});
