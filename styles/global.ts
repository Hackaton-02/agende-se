import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
  keyframes
} from 'styled-components'
import media from 'styled-media-query'

type GlobalStylesProps = {
  defaultHeader?: boolean
}

const anim = keyframes`
0% {
   opacity: 0.4;
   transform: scale(0, 0);
 }
 100% {
   opacity: 1;
   transform: scale(1, 1);
 }
`
const GlobalStyles: Partial<
  GlobalStyleComponent<DefaultTheme, GlobalStylesProps>
> &
  any = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #modal-portal {
    .modal-content{
    ${media.greaterThan('medium')`
      animation: ${anim} 0.4s ease-out;

      `}
    }

  }
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.mainBg};
    }
  `}
`

export default GlobalStyles
