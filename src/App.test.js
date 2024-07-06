/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import handleTestCase from "./helper";

// this is one method to test the function
test("Testing Function on button", () => {
  render(<App />);
  const btn1 = screen.getByTestId("btn-1");
  fireEvent.click(btn1);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

/**
 * what if you have another method or another function it dont have data-testID so how can we test this
 *so you should cant test in the function component rather then you can do make function component into  class
 * or you can do helper  and do export in the given example
 */

test("Testing 2 testing the function of helper", () => {
  expect(handleTestCase()).toMatch("heelo");
});
