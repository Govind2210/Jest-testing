import App from "./App";
const { screen, render } = require("@testing-library/react");

test("findBy and findAllBy", async () => {
  render(<App />);
  // this will not check the value which take time 
  // const el = screen.getByText('Data Found')
  // expect(el).toBeInTheDocument();

  // findBy can check the value which take time
  const el = await screen.Text('Data Found')
  expect(el).toBeInTheDocument();
});
