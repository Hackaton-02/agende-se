import { CardContainer } from 'components/Card/styles'
import { CardContainer as AdminCard } from 'components/CardRoom/styles'
import styled, { css } from 'styled-components'

export const CardsContainerTag = styled.div`
  ${({ theme }) => css`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 85px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (min-width: 577px) {
      ${CardContainer}, ${AdminCard} {
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  `}
`
