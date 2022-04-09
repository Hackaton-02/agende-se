import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeaderProps } from '.'

const wrapperModifiers = {
  between: () => css`
    justify-content: space-between;
  `,

  around: () => css`
    justify-content: space-around;
  `
}

export const HeaderContainer = styled.div<HeaderProps>`
  ${({ theme, isSpaced }) => css`
    position: relative;

    .text-logo {
      margin-left: 95px;
      font-style: normal;
      font-weight: 600;
      font-size: 35px;
      line-height: 42px;
   //   color: ${theme.colors.primary};
      color: ${theme.colors.white};
      position: absolute;
      padding:
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px;
    background-color: ${theme.colors.secondary};
 //   background-color: ${theme.colors.navbar};

    ${media.greaterThan('medium')`
    ${isSpaced ? wrapperModifiers.around : wrapperModifiers.between}
    `}

    ${media.lessThan('medium')`
      padding: 0px 15px;
    //  width: 1200px;
      max-width: 134vw;

       .text-logo, .avatar {
        pointer-events: none;
        display: none;

        }

       .logout {
          font-size: 1rem;
       }
    `}
  `}
`
