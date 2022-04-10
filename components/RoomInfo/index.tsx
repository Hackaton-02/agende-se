import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import * as S from './styles'
import { priceFormat } from 'utils/format-price'
import Button from 'components/Button'
import Avaliable from '../../public/Avaliable'

export type RoomInfoProps = {
  info: {
    id?: string
    title?: string
    description?: string
    price?: number
    avaliable?: boolean
  }
}

const RoomInfo = ({
  info: { title, price, description, id, avaliable }
}: RoomInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon>{priceFormat(price!)}/dia</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button
        size="small"
        avaliable={avaliable}
        minimal
        icon={
          avaliable ? (
            <Avaliable />
          ) : (
            <i
              style={{ color: 'red', marginRight: '5px' }}
              className="fa fa-times"
            ></i>
          )
        }
      >
        {avaliable ? 'Disponível' : 'Indisponível'}
      </Button>
      <Button disabled={!avaliable} size="small">
        Reservar
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default RoomInfo
