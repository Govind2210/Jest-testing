import App from './App'
const { screen, render } = require("@testing-library/react")

test("Get All by Label text 1 test" , ()=>{
  render(<App />);
  const inputs = screen.getAllByLabelText('User Name:');
  expect(inputs[0]).toBeInTheDocument()
  expect(inputs[1]).toBeInTheDocument()
  expect(inputs[2]).toBeInTheDocument()

  for(let i = 0 ; i < inputs.length ; i++){
    expect(inputs[i]).toHaveAttribute('type','text')
    expect(inputs[i]).toBeInTheDocument()
    expect(inputs[i]).toHaveValue("gogo")
  }

})
