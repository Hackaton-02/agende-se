import Button from 'components/Button'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import * as S from './styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { priceFormat } from 'utils/format-price'
import { useSelector } from 'react-redux'
import AuthState from 'dtos/AuthState'
import useSWR from 'swr'
import AddressService from 'services/address'
import ConsultService from 'services/consults'
import { toast } from 'react-toastify'
import RentService from 'services/rents'
import { useRouter } from 'next/router'

type Props = {
  isVisible: boolean
  onClose: () => void
  excludeDates: [Date] | []
  price: number
  id: number
}

const ModalRent: React.FC<Props> = ({
  isVisible,
  onClose,
  excludeDates,
  price,
  id
}) => {
  const portal = document.getElementById('modal-portal')

  const user = useSelector((state: AuthState) => state.auth.loggedUser)
  const { data, error } = useSWR(user.id as any, AddressService.show)

  const [checkInDate, setCheckInDate] = useState()
  const [checkOutDate, setCheckOutDate] = useState()
  const [daysOfStay, setDaysOfStay] = useState()
  const [priceConsult, setPrice] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [especialization, setEspecialization] = useState('')

  const router = useRouter()

  const onChange = (dates: any) => {
    const [checkInDate, checkOutDate] = dates

    setCheckInDate(checkInDate)
    setCheckOutDate(checkOutDate)

    if (checkInDate && checkOutDate) {
      // Calclate days of stay

      const days = Math.floor(
        ((new Date(checkOutDate) as any) - (new Date(checkInDate) as any)) /
          86400000 +
          1
      )

      setDaysOfStay(days as any)
    }
  }

  const handleFinish = () => {
    if (user.profile === 'paciente') {
      try {
        const consult = {
          started_at: checkInDate as unknown as Date,
          finish_at: checkOutDate as unknown as Date,
          user: user,
          room_rent_id: id,
          payment_attributes: {
            amount: daysOfStay! * price,
            method: 'Cash',
            date: new Date(Date.now())
          }
        }

        ConsultService.create(consult)
          .then(() => toast.success('Consulta realizada com sucesso'))
          .then(() => router.push('/Dashboard'))
      } catch (error) {
        console.log(error)
        toast.error('Não foi possível criar a consulta')
      }
    } else {
      try {
        const rent = {
          started_at: checkInDate as unknown as Date,
          finish_at: checkOutDate as unknown as Date,
          user: user,
          room_id: id,
          price: priceConsult,
          especialization,
          title: title,
          description,
          payment_attributes: {
            amount: daysOfStay! * price,
            method: 'Cash',
            date: new Date(Date.now())
          }
        }

        RentService.create(rent)
          .then(() => toast.success('Sala alugada com sucesso'))
          .then(() => router.push('/Dashboard'))
      } catch (error) {
        console.log(error)
        toast.error('Não foi possível alugar essa sala no momento')
      }
    }
  }

  if (error) {
    toast.error('Não foi possível consultar o seu endereço')
  }

  if (isVisible) {
    return (
      <S.ModalWrapper>
        {ReactDOM.createPortal(
          <S.BackDrop isNotPacient={user.profile !== 'paciente'}>
            <Modal.Dialog>
              <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>Finalização da reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row lg={12}>
                  <Col lg={6} className="user-info">
                    {user.profile === 'paciente' && (
                      <>
                        <Form.Select className="mb-3" disabled>
                          <option value={data?.address.user.id}>
                            {data?.address.user.name}
                          </option>
                        </Form.Select>
                        <Row lg={12}>
                          <Col lg={9} className="mb-3 mt-3">
                            <Form.Control
                              disabled
                              value={data?.address.street}
                              type="text"
                              placeholder="Rua/Avenida"
                            />
                          </Col>
                          <Col lg={3} className="mb-3 mt-3">
                            <Form.Control
                              disabled
                              value={data?.address.number}
                              type="text"
                              placeholder="Número"
                            />
                          </Col>
                        </Row>
                        <Row lg={12}>
                          <Col lg={8} className="mb-3 mt-3">
                            <Form.Control
                              disabled
                              value={data?.address.city}
                              type="text"
                              placeholder="Cidade"
                            />
                          </Col>
                          <Col lg={4} className="mb-3 mt-3">
                            <Form.Control
                              disabled
                              value={data?.address.state}
                              type="text"
                              placeholder="UF"
                            />
                          </Col>
                        </Row>
                        <Row lg={12}>
                          <Col lg={4}>
                            <Form.Control
                              disabled
                              value={data?.address.country}
                              type="text"
                              placeholder="País"
                            />
                          </Col>
                          <Col lg={4}>
                            <Form.Control
                              disabled
                              value={data?.address.zipcode}
                              type="text"
                              placeholder="Cep"
                            />
                          </Col>
                          <Col lg={4}>
                            <Form.Control
                              disabled
                              value={data?.address.complement}
                              type="text"
                              placeholder="Complemento"
                            />
                          </Col>
                        </Row>
                      </>
                    )}
                    {user.profile !== 'paciente' && (
                      <>
                        <Row className="mt-3">
                          <Col lg={8}>
                            <Form.Control
                              value={priceConsult}
                              type="number"
                              placeholder="Preço da consulta"
                              onChange={(
                                evt: React.ChangeEvent<HTMLInputElement>
                              ) => setPrice(evt.target.value as any)}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col lg={10}>
                            <Form.Control
                              value={title}
                              type="text"
                              placeholder="Nome do consultório"
                              onChange={(
                                evt: React.ChangeEvent<HTMLInputElement>
                              ) => setTitle(evt.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col lg={12}>
                            <Form.Control
                              value={description}
                              as="textarea"
                              rows={3}
                              placeholder="Descrição do consultório"
                              onChange={(
                                evt: React.ChangeEvent<HTMLInputElement>
                              ) => setDescription(evt.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col lg={12}>
                            <Form.Control
                              value={especialization}
                              as="textarea"
                              rows={3}
                              placeholder="Digite aqui a descrição das suas especialidades"
                              onChange={(
                                evt: React.ChangeEvent<HTMLInputElement>
                              ) => setEspecialization(evt.target.value)}
                            />
                          </Col>
                        </Row>
                      </>
                    )}
                  </Col>
                  <Col lg={6}>
                    <Row className="modal-bg" lg={12}>
                      <h5 className="mb-3">Selecione os dias</h5>
                      <DatePicker
                        className="w-100"
                        selected={checkInDate}
                        onChange={onChange}
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        minDate={new Date(Date.now() + 86400000)}
                        selectsRange
                        inline
                        excludeDates={excludeDates}
                      />
                      <h5 className="mt-3">
                        <span className="total"> Total: </span>
                        {priceFormat(daysOfStay! * price || 0)}
                      </h5>
                    </Row>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button color="primary" minimal onClick={onClose}>
                  Fechar
                </Button>
                <Button color="secondary" onClick={handleFinish}>
                  Finalizar Reserva
                </Button>
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
