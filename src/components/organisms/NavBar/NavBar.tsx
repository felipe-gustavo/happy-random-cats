import { AppBar } from "@mui/material";

import { LogoContainer, Toolbar } from "./NavBar.style";

import { AvatarIcon } from "@/components/molecules/AvatarIcon";

export function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <LogoContainer variant="h6" noWrap>
          H<span>app</span>y
        </LogoContainer>
        <AvatarIcon />
      </Toolbar>
    </AppBar>
  );
}
