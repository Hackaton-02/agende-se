import styled, { css } from 'styled-components'

type ContainerProps = {
  isSpaced?: boolean
}

export const TableWrapper = styled.div<ContainerProps>`
  ${({ isSpaced = false }) => css`
    max-width: 60rem;
    margin: 5rem auto;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: ${isSpaced ? '100px 50px' : undefined};

    .form-label {
      color: grey;
    }
  `}
`
