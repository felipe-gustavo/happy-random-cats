import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: background-color 100ms ease-in-out;

  &.primary {
    border-color: #0a8ef3;
    background-color: #0a8ef3;
    color: white;

    &:hover,
    &:focus-visible,
    &:active {
      background-color: #6bbfff;
    }
  }

  &.secondary {
    border-color: #a7a7a7;
    background-color: #a7a7a7;
    color: white;

    &:hover,
    &:focus-visible,
    &:active {
      background-color: #d0d0d0;
    }
  }
`;
