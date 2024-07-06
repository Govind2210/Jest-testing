/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import CleanDB from "./servce/cleanDb";

// beforeAll(()=>{
//   console.log("****** Before All ******");
// })

// beforeEach(()=>{
//     console.log("****** Before Each ******");
//   })

console.log(" 1 ");
test("on click event test 1", () => {
  console.log(" 1 ");

  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("UPDATED DATA!!!!")).toBeInTheDocument();
});

test("on click event test 2", () => {
  console.log(" 2 ");
  render(<App />);
  let Newbtn = screen.getByRole("button");
  fireEvent.click(Newbtn);
  expect(screen.getByText("UPDATED DATA!!!!")).toBeInTheDocument();
});

// afterAll(()=>{
//   console.log("****** After All ******");
// })

afterEach(() => { // this is the way to clean the the DB after each test
  console.log("****** After Each ******");
  CleanDB()
});
