import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
${({ theme }) => css`
  .room-feature {
    font-size: 1.1rem;
    color: #404040;
    margin-left: ${theme.spacings.large};
  }

  h3:first-child {
    margin-left: ${theme.spacings.large};
  }

  ${media.lessThan('medium')`

  .room-feature, h3:first-child {
    margin-left: calc(100% - 70vw);
  }

  `}

  .room-feature p {
    margin-left: ${theme.spacings.xxsmall};
    display: inline-block;
    font-style: italic;
    font-weight: 500;

  }
`}
`
