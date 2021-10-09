import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../Select";

const onChange = jest.fn();
const options = [
  {
    value: "default value",
    text: "Default value",
  },
  {
    value: "option 1",
    text: "Option 1",
  },
  {
    value: "option 2",
    text: "Option 2",
  },
];

it("select value changes on user action", () => {
  render(<Select onChange={onChange} options={options} />);
  const select = screen.getByTestId("select");
  fireEvent.change(select, { target: { value: "option 1" } });
  expect(onChange).toHaveBeenCalledTimes(1);
});
