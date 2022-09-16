import styled from "styled-components";

export const LoginFormContainer = styled.div`
  .form-paper {
    max-width: 540px;
    padding: 26px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;

    .login-title {
      margin: 10px 0 30px;
      text-align: center;
    }
  }
`;

export const InputsContainer = styled.div`
  min-width: 300px;

  & > .login-input {
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 26px 0;
`;
