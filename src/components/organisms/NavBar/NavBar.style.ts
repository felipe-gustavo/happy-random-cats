import { Typography, Toolbar as MuiToolbar } from "@mui/material";
import styled from "styled-components";

export const LogoContainer = styled(Typography)`
  display: "flex";
  font-family: "Press Start 2P", monospace;
  font-weight: bold;
  letter-spacing: 0.3rem;
  color: inherit;
  font-size: 22px;
  user-select: none;

  span {
    color: #ffd118;
  }
`;

export const Toolbar = styled(MuiToolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 20px;
`;
