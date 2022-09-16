import { render, screen } from "@testing-library/react";

import { Button, ButtonProps } from "./Button";

type ButtonType = NonNullable<ButtonProps["type"]>;

const renderComponent = (props: ButtonProps) =>
  render(<Button {...props}>some-button-text</Button>);

describe("<Button />", () => {
  it("is mixing the className", () => {
    renderComponent({ className: "my-custom-class" });

    const button = screen.getByRole("button");

    expect(button.classList).toContain("my-custom-class");
  });

  it.each<ButtonType>(["primary", "secondary"])(
    "match screenshot with %s type",
    (type: ButtonType) => {
      const { baseElement } = renderComponent({ type });

      expect(baseElement).toMatchSnapshot();
    }
  );

  it("has passing forward the rest of props", () => {
    renderComponent({ "data-testid": "some-testid" } as ButtonProps);

    const button = screen.queryByTestId("some-testid");

    expect(button).not.toBeUndefined();
  });
});
