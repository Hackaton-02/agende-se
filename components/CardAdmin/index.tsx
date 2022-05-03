import AdminDeleteModal from 'components/shared/AdminConfirmationModal'
import Books from 'dtos/Books'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import * as S from './styles'


type Props = {
  book: Books
}

const CardAdmin: React.FC<Props> = ({ book }) => {
  const [show, setShow] = useState(false)
  const [accepted, setAccepted] = useState(true)


  const value = book.accepted

  const handleOnClose = () => {
    setShow(false)
  }

  return (
    <S.CardWrapper>
     <AdminDeleteModal type={accepted} show={show} handleClose={handleOnClose} target={book.user.name} />
      <Row className="main-title">
        <i className="fa fa-check-circle" style={{ color: 'green' }}></i>
        <h2>Pedido recebido</h2>
      </Row>
      <Row>
        <p className='text'>
          Parabéns! Você recebeu um pedido de aluguel para uma de suas salas. O
          aluguel é referente a {book.room.name}. O possível locatário é {book.user.name}. Para
          aceitar ou recusar o pedido, dê um clique nos botões abaixo.

        </p>
      </Row>
      <Row lg={12}>
        <Col lg={4}>
          <S.RejectButton onClick={() => {
            setAccepted(false)
            setShow(true)
          }}>
            <h5>Recusar</h5>
          </S.RejectButton>
        </Col>
        <Col lg={8}>
          <S.AcceptedButton onClick={() => {
            setAccepted(true)
            setShow(true)
            }}>
            <p>Aceitar</p>
          </S.AcceptedButton>
        </Col>
      </Row>
    </S.CardWrapper>
  )
}

export default CardAdmin
