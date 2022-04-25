import Button from 'components/Button'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import * as S from './styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom'

type Props = {
  isVisible: boolean
  onClose: () => void
}

const ModalRent: React.FC<Props> = ({ isVisible, onClose }) => {
  const portal = document.getElementById('modal-portal')

  if (isVisible) {
    return (
      <S.ModalWrapper>
        {ReactDOM.createPortal(
          <S.BackDrop>
            <Modal.Dialog>
              <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>Finalização da reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row lg={12}>
                  <Col lg={6} className="user-info">
                    <Form.Select className="mb-3">
                      <option>Selecione um usuário</option>
                    </Form.Select>
                    <Row lg={12}>
                      <Col lg={9} className="mb-3 mt-3">
                        <Form.Control type="text" placeholder="Rua/Avenida" />
                      </Col>
                      <Col lg={3} className="mb-3 mt-3">
                        <Form.Control type="text" placeholder="Número" />
                      </Col>
                    </Row>
                    <Row lg={12}>
                      <Col lg={8} className="mb-3 mt-3">
                        <Form.Control type="text" placeholder="Cidade" />
                      </Col>
                      <Col lg={4} className="mb-3 mt-3">
                        <Form.Control type="text" placeholder="UF" />
                      </Col>
                    </Row>
                    <Row lg={12}>
                      <Col lg={4}>
                        <Form.Control type="text" placeholder="País" />
                      </Col>
                      <Col lg={4}>
                        <Form.Control type="text" placeholder="Cep" />
                      </Col>
                      <Col lg={4}>
                        <Form.Control type="text" placeholder="Complemento" />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6}>
                    <Row className="modal-bg" lg={12}>
                      <h5 className="mb-3">Selecione os dias</h5>
                      <DatePicker
                        className="w-100"
                        //  selected={checkInDate}
                        onChange={() => {}}
                        //  startDate={checkInDate}
                        // endDate={checkOutDate}
                        minDate={new Date()}
                        selectsRange
                        inline
                        //  excludeDates={excludedDates}
                      />
                      <h5 className="mt-3">
                        <span className="total"> Total: </span>R$ 420,00
                      </h5>
                    </Row>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button color="primary" minimal onClick={onClose}>
                  Fechar
                </Button>
                <Button color="secondary">Finalizar Reserva</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </S.BackDrop>,
          portal!
        )}
      </S.ModalWrapper>
    )
  }
  return <></>
}

export default ModalRent
