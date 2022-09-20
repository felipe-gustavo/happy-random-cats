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
