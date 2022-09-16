import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("match with the screenshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
