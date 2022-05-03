import styled, { css } from 'styled-components'

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    button {
      border-radius: 50%;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 15px;
      height: 40px;
      width: 40px;
      background-color: ${theme.colors.lightPrimary};
      border: none;
    }

    button.btn-primary.active {
      background-color: ${theme.colors.primary};
    }
    button:hover {
      border: none;
      background-color: ${theme.colors.primary};
    }
  `}
`
