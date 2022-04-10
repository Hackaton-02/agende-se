import { HeaderContainer } from 'components/Header/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from '../../components/Container'

export const Main = styled.main`
    margin-top: 23rem;

  ${media.lessThan('medium')`
    margin-top: 15rem;
`}
  .react-datepicker {
    box-shadow: 19.373px 19.373px 15.4984px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    &:first-child {
      margin-left: 5rem;
    }

    &:last-child {
      margin-left: 8rem;
    }
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 50%;

    &:hover {
      border-radius: 50%;
    }
  }
`

export const Cover = styled.div`
  position: absolute;
  top: 73px;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.3;
  background-image: url('/image-city.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${media.greaterThan('medium')`
      height: 28rem;
      clip-path: polygon(0% 0%, 0 93%, 100% 74%, 100% 0%);
    `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionRoomInfo = styled(Section)``

export const Wrapper = styled.div`
  overflow: hidden;

  .datapicker-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.lessThan('medium')`
    align-items: center;

    `}
  }

  ${HeaderContainer} {
    p {
      margin-bottom: 0 !important;
    }
  }
`
