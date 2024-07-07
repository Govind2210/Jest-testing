import App from "./App";
const { screen, render } = require("@testing-library/react");

test("QueryBy - and - QueryAllBy", () => {
  render(<App />);
  // const btn1 = screen.getByText("Login");
  const btn1 = screen.queryByText("Login");
  expect(btn1).not.toBeInTheDocument();
});
