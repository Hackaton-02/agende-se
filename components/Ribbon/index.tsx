export type RibbonColors = 'lightBlue' | 'secondary'
export type RibbonSize = 'normal' | 'small'
import * as S from "./styles"
export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSize
}

const Ribbon = ({
  children,
  color = 'lightBlue',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon
