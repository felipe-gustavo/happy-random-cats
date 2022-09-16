import clsx from "clsx";

import { createRef, useState } from "react";

import { LogoContainer } from "./AppLogo.style";

import { ReactComponent as LogoIcon } from "@/assets/icons/logo.svg";
import { Button } from "@/components/atoms/Button";

import { getCurrentElementRotateByMatrix } from "@/utils/getCurrentElementRotateByMatrix";

export function AppLogo() {
  const logoRef = createRef<SVGSVGElement>();
  const [rotate, setRotate] = useState<number>(0);
  const [spin, setSpin] = useState(false);

  const logoIconClasses = clsx({
    spin,
    logo: true,
  });

  const handlerToogleLogoSpin = () => {
    console.log("will change the spin to:", spin);
    if (spin) {
      const newRotate = logoRef.current
        ? getCurrentElementRotateByMatrix(logoRef.current)
        : 0;
      setRotate(newRotate);
      setSpin(false);
      return;
    }

    setSpin(true);
  };

  return (
    <LogoContainer rotate={rotate}>
      <LogoIcon
        ref={logoRef}
        role="img"
        height="40vmin"
        className={logoIconClasses}
      />
      <Button
        onClick={handlerToogleLogoSpin}
        type="primary"
        className="switch-logo-button"
      >
        {spin ? "Static logo" : "Spin logo"}
      </Button>
    </LogoContainer>
  );
}
