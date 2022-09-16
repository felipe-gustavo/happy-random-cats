import { fireEvent, render, screen } from "@testing-library/react";

import { AppLogo } from "./AppLogo";

jest.mock("@/utils/getCurrentElementRotateByMatrix", () => ({
  getCurrentElementRotateByMatrix: jest.fn().mockReturnValue(90),
}));

describe("<Logo />", () => {
  it("starts the logo to static", () => {
    render(<AppLogo />);

    const img = screen.getByRole("img");
    const button = screen.getByRole("button");

    expect(img.classList).not.toContain("spin");
    expect(button.textContent).toBe("Spin logo");
  });

  it("is switching the logo to spin", () => {
    render(<AppLogo />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const img = screen.getByRole("img");

    expect(img.classList).toContain("spin");
    expect(button.textContent).toBe("Static logo");
  });

  it("is switching the logo to static", () => {
    render(<AppLogo />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);

    const img = screen.getByRole("img");

    expect(img.classList).not.toContain("spin");
    expect(button.textContent).toBe("Spin logo");
  });
});
