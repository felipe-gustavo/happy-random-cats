import { Skeleton as MuiSkeleton } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 500px;
    max-width: 100vw;
    &.none-img {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Skeleton = styled(MuiSkeleton)`
  min-width: ${({ theme }) => theme.breakpoints.down("sm")}px;
  max-width: 500px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 0px;
    width: 100%;
  }
`;
