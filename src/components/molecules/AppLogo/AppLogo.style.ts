import styled from "styled-components";

export const LogoContainer = styled.div<{ rotate: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .switch-logo-button {
    z-index: 1;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(${({ rotate }) => rotate}deg);
    }
    to {
      transform: rotate(calc(${({ rotate }) => rotate}deg + 360deg));
    }
  }

  .logo {
    transform: rotate(${({ rotate }) => rotate}deg);
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo.spin {
      animation: App-logo-spin infinite 20s linear;
    }
  }
`;
