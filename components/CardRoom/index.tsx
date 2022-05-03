import Room from 'dtos/Room'
import { useRouter } from 'next/router'
import { priceFormat } from 'utils/format-price'
import shorten from 'utils/shorten-text'
import {
  CardContainer,
  Title,
  Paragraph,
  ButtonsContainer,
  DetailsBtn,
  Price
} from './styles'

export type CardProps = {
  isSpaced?: boolean
  room: Room
}

const CardRoom: React.FC<CardProps> = ({ room }) => {
  const router = useRouter()
  return (
    <>
      <CardContainer>
        <Title>{room.name}</Title>
        <Paragraph>
          {shorten(room.description, 120)}
        </Paragraph>
        <ButtonsContainer>
          <DetailsBtn onClick={() => router.push(`/Room/${room.id}`)}>Ver detalhes</DetailsBtn>
          <Price>
            <img src="price-tag.svg" />
            {priceFormat(room.price)}/dia
          </Price>
        </ButtonsContainer>
      </CardContainer>
    </>
  )
}

export default CardRoom
