import clsx from "clsx";
import React from "react";

import { ButtonStyled } from "./Button.style";

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "type" | "ref"
> & {
  type?: "primary" | "secondary";
};

export function Button({ type, className, ...props }: ButtonProps) {
  const buttonClasses = clsx([
    type,
    ...(className ? className.split(" ") : []),
  ]);

  return <ButtonStyled {...props} className={buttonClasses} type="button" />;
}

Button.defaultProps = {
  type: "primary",
};
