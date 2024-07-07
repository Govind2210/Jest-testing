import userEvent from "@testing-library/user-event";
import App from "./App";
const { screen, render, within } = require("@testing-library/react");

test("within - Click Event with User Event Library", async () => {
  userEvent.setup();
  render(<App />);
  const btn = screen.getByText("Cick Me");
  await userEvent.click(btn);
  expect(
    screen.getByText("RTQ - Click Event with User Event Library")
  ).toBeInTheDocument();
});
