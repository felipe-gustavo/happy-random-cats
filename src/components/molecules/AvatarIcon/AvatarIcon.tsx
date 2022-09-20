import { Avatar, MenuItem, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { IconButton, Menu } from "./AvatarIcon.style";

import { useAuth } from "@/contexts/Auth/useAuth";

export function AvatarIcon() {
  const [name, setName] = useState("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { user, logoutCurrentUser } = useAuth();
  const { t } = useTranslation();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logoutCurrentUser();
  };

  useEffect(() => {
    if (user) {
      setName(`${user.firstName[0]}+${user.lastName[0]}`);
    }
  }, [user]);

  return (
    <div>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt={user?.firstName}
            src={`https://ui-avatars.com/api/?background=random&name=${name}`}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">{t("navbar.logout")}</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
