import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

const onChange = jest.fn();

it("changes input value on user action", () => {
  render(<SearchInput onChange={onChange} />);
  const input = screen.getByTestId("searchInput");
  fireEvent.change(input, {
    target: { value: "Falcon 1" },
  });
  expect(onChange).toHaveBeenCalledTimes(1);
});
