import * as S from './styles'

interface NoDataProps {
  message?: string
}
const NoData: React.FC<NoDataProps> = ({
  message = 'Não há dados cadastrados ou encontrados =('
}) => {
  return <S.Painel>{message}</S.Painel>
}
export default NoData
