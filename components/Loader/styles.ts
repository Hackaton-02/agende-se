import styled, { css } from 'styled-components'

const variables = {
  len: '300px',
  time: 3000 + 'ms'
}
export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.small};

    svg {
      margin-left: auto;
      margin-right: auto;
    }

    @keyframes anim {
      12% {
        stroke-dasharray: calc(${variables.len} * 0.14), ${variables.len};
        stroke-dashoffset: calc(-${variables.len} * 0.11);
      }
      47% {
        stroke-dasharray: calc(${variables.len} * 0.35), ${variables.len};
        stroke-dashoffset: calc(-${variables.len} * 0.35);
      }
      100% {
        stroke-dasharray: calc(${variables.len} * 0.01), ${variables.len};
        stroke-dashoffset: calc(-${variables.len} * 0.99);
      }
    }

    & #infinity-outline {
      fill: transparent;
      stroke-width: 4;
      stroke: ${theme.colors.primary};
      stroke-dasharray: calc(${variables.len} * 0.01), ${variables.len};
      stroke-dashoffset: 0;
      animation: anim ${variables.time} linear infinite;
    }
    & #infinity-bg {
      fill: transparent;
      stroke-width: 4;
      stroke: ${theme.colors.gray};
      opacity: 0.2;
    }
  `}
`
