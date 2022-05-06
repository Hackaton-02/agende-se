import AdminModal from 'components/shared/AdminConfirmationModal'
import AuthState from 'dtos/AuthState'
import Books from 'dtos/Books'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import BookedService from 'services/booked'
import * as S from './styles'

type Props = {
  book: Books
}

const CardAdmin: React.FC<Props> = ({ book }) => {
  const [show, setShow] = useState(false)
  const [accepted, setAccepted] = useState(true)

  const { profile } = useSelector((state: AuthState) => state.auth.loggedUser)
  const isAdmin = profile === 'admin'
  const isEspecialist = profile === 'especialista'

  const date = new Date(book.updated_at)
  const day = date.getDay()
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const handleOnClose = (success?: boolean | 'close') => {
    setShow(false)

    if (success === 'close') return
    try {
      isAdmin &&
        BookedService.update_admin({
          id: book.id,
          accepted: success ? 1 : 2
        })
      isEspecialist &&
        BookedService.update_especialist({
          id: book.id,
          accepted: success ? 'agreed' : 'rejected'
        })
    } catch (error) {
      console.log(error)
      toast.error('Ops...algo deu errado ao aceitar/recusar o pedido.')
    }
  }

  return (
    <S.CardWrapper>
      <AdminModal
        type={accepted}
        show={show}
        handleClose={success => handleOnClose(success)}
        target={book.user.name}
      />
      <Row className="main-title">
        <i
          className="fa fa-check-circle"
          style={{ color: book.accepted !== 'pending' ? 'blue' : 'green' }}
        ></i>
        <h2>Pedido {book.accepted !== 'pending' ? 'concluído' : 'recebido'}</h2>
      </Row>
      <Row>
        {book.accepted !== 'pending' ? (
          <p className="text">
            O pedido de aluguel para uma de suas salas foi{' '}
            {book.accepted === 'agreed' ? 'aceito' : 'recusado'}. O aluguel é
            referente a {book.room.name}. O locatário é &nbsp;
            {book.user.name}.
          </p>
        ) : (
          <p className="text">
            Parabéns! Você recebeu um pedido de aluguel para uma de suas salas.
            O aluguel é referente a {book.room.name}. O possível locatário é
            &nbsp;
            {book.user.name}. Para aceitar ou recusar o pedido, dê um clique nos
            botões abaixo.
          </p>
        )}
      </Row>
      <Row lg={12}>
        <Col lg={4}>
          {book.accepted !== 'pending' ? (
            <h5 className="dates">Concluído:</h5>
          ) : (
            <S.RejectButton
              onClick={() => {
                setAccepted(false)
                setShow(true)
              }}
            >
              <h5>Recusar</h5>
            </S.RejectButton>
          )}
        </Col>
        <Col lg={8}>
          {book.accepted !== 'pending' ? (
            <p className="dates">{day + ' de ' + month + ' de ' + year}</p>
          ) : (
            <S.AcceptedButton
              onClick={() => {
                setAccepted(true)
                setShow(true)
              }}
            >
              <p>Aceitar</p>
            </S.AcceptedButton>
          )}
        </Col>
      </Row>
    </S.CardWrapper>
  )
}

export default CardAdmin
