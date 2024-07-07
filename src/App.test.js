import App from './App'
const { screen, render } = require("@testing-library/react")

test("Get placeHoler test" , ()=>{
  render(<App />);
  const textPlaceHolder = screen.getByPlaceholderText("Enter User Name");
  expect(textPlaceHolder).toBeInTheDocument();
})
