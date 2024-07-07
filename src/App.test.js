import userEvent from "@testing-library/user-event";
import App from "./App";
import { Usr } from "./Usr";
const { screen, render, act } = require("@testing-library/react");

test("component Props", async () => {
  const name = "gogo"
  userEvent.setup();
  render(<Usr name={name} />);
  const user = screen.getByText(name)
  expect(user).toBeInTheDocument()
});
