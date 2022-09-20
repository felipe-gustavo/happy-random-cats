import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  .form-paper {
    width: ${({ theme }) => theme.breakpoints.values.sm}px;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;

    .signup-title {
      margin: 10px 0 30px;
      text-align: center;
    }

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 100%;
    }
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 26px;
  flex-wrap: wrap;

  > .signup-input {
    min-width: 200px;
    flex: 1 0 40%;

    &.email {
      flex: none;
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 26px 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    > button {
      width: 100%;
    }
  }
`;
