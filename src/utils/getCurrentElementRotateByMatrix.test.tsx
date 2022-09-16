import { render, screen } from "@testing-library/react";

import { getCurrentElementRotateByMatrix } from "./getCurrentElementRotateByMatrix";

describe("getCurrentElementRotateByMatrix", () => {
  it("is getting right rotate degree", () => {
    render(
      <div
        data-testid="root"
        style={{ transform: "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)" }}
      />
    );

    expect(getCurrentElementRotateByMatrix(screen.getByTestId("root"))).toBe(
      90
    );
  });

  it("is return 0 when value not exists", () => {
    render(<div data-testid="root" />);

    expect(getCurrentElementRotateByMatrix(screen.getByTestId("root"))).toBe(0);
  });

  it("is throwing an error when received value isn't a matrix", () => {
    render(<div data-testid="root" style={{ transform: "rotateX(.5turn)" }} />);

    expect(
      getCurrentElementRotateByMatrix.bind(null, screen.getByTestId("root"))
    ).toThrowErrorMatchingInlineSnapshot(
      `"Cannot get rotate from element DIV, value received isn't a matrix: rotateX(.5turn)"`
    );
  });
});
