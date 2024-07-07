import App from './App'
const { screen, render } = require("@testing-library/react")

test("btn 1 test - get by role test" , ()=>{
  render(<App />);
  // simentic element testing
  const btn1 = screen.getByRole("button" ,{name:"Click One"});
  const btn2 = screen.getByRole("button" ,{name:"Click two"});
  const input1 = screen.getByRole("textbox" , {name:"User Name"})
  const input2 = screen.getByRole("textbox" , {name:"User Age"})

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();

  // non - simentic element
  const div1 = screen.getByRole("dummy");
  expect(div1).toBeInTheDocument();
})