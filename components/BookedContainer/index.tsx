import BookedCard from 'components/BookedCard'
import { CardsContainerTag } from 'components/CardsContainer/styles'
import Books from 'dtos/Books'

type Props = {
  books: [Books]
}

const BookedContainer: React.FC<Props> = ({ books }) => {
  return (
    <CardsContainerTag>
      {books.map(book => (
        <BookedCard book={book} />
      ))}
    </CardsContainerTag>
  )
}
export default BookedContainer
