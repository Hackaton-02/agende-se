import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    ${media.lessThan("medium")`
    width: 130vw;

    `}
  p {
    margin-bottom: 0 !important;
  }
`
