import { render } from "@testing-library/react";
import Search from "./Search";

describe("Checking It's Working", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId("searchInput");
    expect(input).toBeTruthy();
  });
});
