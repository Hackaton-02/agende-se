import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'
import { priceFormat } from 'utils/format-price'
import Button from 'components/Button'
import Avaliable from '../../public/avaliable.svg'

export type RoomInfoProps = {
  id?: string
  title?: string
  description?: string
  price?: number
}

const RoomInfo = ({
  title = 'Nome da sala',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis magna velit in massa. Ornare aliquet feugiat diam quis urna, nibh. Ac pellentesque proin viverra velit venenatis enim aliquam. Risus hac iaculis odio scelerisque turpis.',
  price = 20,
  id = '1'
}: RoomInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon>{priceFormat(price)}/dia</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button id={id} size="small" minimal icon={<Avaliable />}>
        Disponível
      </Button>
      <Button id={id} size="small">
        Reservar
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default RoomInfo
