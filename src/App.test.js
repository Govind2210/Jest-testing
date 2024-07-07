import userEvent from "@testing-library/user-event";
import App from "./App";
import { Usr } from "./Usr";
const { screen, render, act } = require("@testing-library/react");

test("Function Props Testing", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<App testFunction={testFunction} />);
  const btn = screen.getByRole("btn");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});
