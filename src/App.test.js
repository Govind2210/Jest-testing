import userEvent from "@testing-library/user-event";
import App from "./App";
const { screen, render, act } = require("@testing-library/react");

test("Act Function Testing", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
   await act( async ()=>{
    await userEvent.type(el, "gogo");
  })
  expect(screen.getByText("gogo")).toBeInTheDocument();
});
