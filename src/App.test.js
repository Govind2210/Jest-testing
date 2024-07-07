import App from './App'
const { screen, render } = require("@testing-library/react")

test("Get All by Role test 1" , ()=>{
  render(<App />);
  const inputField = screen.getByLabelText("User Name")
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("gogo")
})

test("Get All by  test 2" , ()=>{
  render(<App />);
  const checkBox = screen.getByLabelText("Skills")
  expect(checkBox).toBeInTheDocument();
})