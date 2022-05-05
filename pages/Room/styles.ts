import { BackDrop, ModalWrapper } from 'components/Modal/styles'
import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { Container } from '../../components/Container'

export const Main = styled.main`
  margin-top: 23rem;

  .features-right {
    display: flex;
    justify-content: flex-start;
  }

  .features-left {
    display: flex;
    justify-content: flex-end;
  }

  .time-left {
    display: flex;
    flex-direction: column;
    height: 120%;
  }

  .time-text {
    text-align: left;
    width: 280px;
  }

  ${media.lessThan('medium')`
    margin-top: 15rem;
`}
  .react-datepicker {
    box-shadow: 19.373px 19.373px 15.4984px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    margin-top: 25px;
    margin-bottom: 35px;
  }

  & .user-info .row {
    margin-bottom: 20px;
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

type Random = {
  url: string
  isRandom?: boolean
}

export const Cover = styled.div<Random>`
  ${({ theme, isRandom = true, url }) => css`
    position: absolute;
    top: 73px;
    right: 0;
    left: 0;
    height: 39.5rem;
    opacity: 0.3;
    background-image: url(${isRandom ? url : '/image-city.svg'});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    ${media.greaterThan('medium')`
      height: 28rem;
      clip-path: polygon(0% 0%, 0 93%, 100% 74%, 100% 0%);
    `}
    ${media.lessThan('medium')`
       width: 130vw;

    `}
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

  .features-right {
    p {
      margin-bottom: 15px !important;
    }
  }

  ${media.lessThan('medium')`
    align-items: center;

    .features-left {
    justify-content: center;
  }

    .features-right {
      justify-content: flex-end;
      width: 90%;

    }
    `}
`
