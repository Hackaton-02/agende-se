import { useRouter } from 'next/router'
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
}

const Card: React.FC<CardProps> = () => {
  const router = useRouter()
  return (
    <>
      <CardContainer>
        <Title>Nome da sala</Title>
        <Paragraph>
          Card layouts can vary to support the types of content they contain.
          The following elements are commonly found among that variety.
        </Paragraph>
        <ButtonsContainer>
          <DetailsBtn onClick={() => router.push("/Room")}>Ver detalhes</DetailsBtn>
          <Price>
            <img src="price-tag.svg" />
            R$ 20,00/dia
          </Price>
        </ButtonsContainer>
      </CardContainer>
    </>
  )
}

export default Card
