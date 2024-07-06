/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import App from './App';

test("snapshot testing", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
})
