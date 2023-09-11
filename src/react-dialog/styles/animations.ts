import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideRight = keyframes`
    from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
