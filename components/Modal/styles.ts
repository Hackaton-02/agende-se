import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ModalWrapper = styled.div``

export const BackDrop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${theme.layers.overlay};
    background-color: rgba(0, 0, 0, 0.75);

    .modal-dialog {
      ${media.greaterThan('medium')`
        max-width: 1000px;
        height: 800px;
    `}
    }

    .user-info {
      border: 2px solid ${theme.colors.gray};
      border-radius: ${theme.border.radius};
      margin-left: ${theme.spacings.xsmall};
      padding-top: calc(${theme.spacings.large} * 1.25);
      max-width: calc(${theme.grid.container} / 4.5);
    }

    .react-datepicker {
      box-shadow: 19.373px 19.373px 15.4984px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      border: none;
      margin-top: 35px;
      margin-bottom: 35px;
      display: flex;
      justify-content: center;
    }

    h5 {
      display: flex;
      justify-content: center;
      font-weight: ${theme.font.bold};
    }

    & span.total {
      color: ${theme.colors.primary};
      margin-right: 8px;
      font-weight: ${theme.font.bold};
    }

    .modal-bg {
      background-color: ${theme.colors.modalLeftBg};
      padding-left: ${theme.spacings.small};
      padding-right: ${theme.spacings.small};
      margin-left: ${theme.spacings.small};
      margin-right: ${theme.spacings.small};
    }
  `}
`
