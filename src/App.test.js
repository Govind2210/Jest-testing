import userEvent from "@testing-library/user-event";
import App from "./App";
const { screen, render, within } = require("@testing-library/react");

test("onChange Event Testing", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "gogo");
  expect(screen.getByText("gogo")).toBeInTheDocument();
});
