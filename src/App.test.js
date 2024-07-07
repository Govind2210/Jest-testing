import App from "./App";
const { screen, render } = require("@testing-library/react");

test("SIngle - getAllByText", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  const pTag = screen.getByText("P tag Testing");
  expect(btn).toBeInTheDocument();
  expect(pTag).toBeInTheDocument();
});

test("multiple - getAllByText", () => {
  render(<App />);
  const Htags = screen.getAllByText("RTQ - getByText and getAllByText");

  for (let i = 0; i < Htags.length; i++) {
    expect(Htags[i]).toBeInTheDocument();
  }
});
