import { render, screen } from "@testing-library/react";

import { AppDescription } from "./AppDescription";

describe("<AppDescription />", () => {
  it("renders learn react link", () => {
    render(<AppDescription />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("match with screenshot", () => {
    const { baseElement } = render(<AppDescription />);

    expect(baseElement).toMatchSnapshot();
  });
});
