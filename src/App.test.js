import App from './App'
const { screen, render } = require("@testing-library/react")

test("Get All by Role" , ()=>{
  render(<App />);
  const button1 = screen.getAllByRole("button");
  // one way to give index to tetsing
  expect(button1[0]).toBeInTheDocument()

  // another way is itering in the loop
  for(let i = 0 ; i < button1.length ; i++ ){
    expect(button1[i]).toBeInTheDocument()
  }

  // testing for select
  const options = screen.getAllByRole("option")

  for(let i = 0 ; i < options.length ; i++ ){
    expect(options[i]).toBeInTheDocument()
  }
})