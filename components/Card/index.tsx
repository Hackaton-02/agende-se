import RoomRent from 'dtos/RoomRent'
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
  rent: RoomRent
}

const CardRent: React.FC<CardProps> = ({ rent }) => {
  const router = useRouter()
  return (
    <>
      <CardContainer>
        <Title>{shorten(rent.title, 24)}</Title>
        <Paragraph>{shorten(rent.description, 120)}</Paragraph>
        <ButtonsContainer>
          <DetailsBtn
            onClick={() =>
              router.push({
                pathname: `/Room/[id]`,
                query: { id: `${rent.id}`, rent: true }
              })
            }
          >
            Ver detalhes
          </DetailsBtn>
          <Price>
            <img src="price-tag.svg" />
            {priceFormat(rent.price)}/dia
          </Price>
        </ButtonsContainer>
      </CardContainer>
    </>
  )
}

export default CardRent
