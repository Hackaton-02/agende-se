import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  p {
    margin-bottom: 0 !important;
  }

  ${media.lessThan('medium')`
      width: 130vw;
   `}

  .form-label {
    color: white;
  }

  strong {
    color: white;
  }

  span.d-block {
    color: white;
  }
`
