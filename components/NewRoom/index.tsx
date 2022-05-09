import Button from 'components/Button'
import { TableWrapper } from 'components/TableUsers/styles'
import { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import RoomsService from 'services/rooms'

const RoomContainer: React.FC = () => {
  const [newRoom, setNewRoom] = useState({
    name: '',
    description: '',
    price: '',
    internet: false,
    bathroom: false,
    avaliable: true,
    airConditioned: false,
    furnished: false,
    roomCleaning: false
  })

  const handleCreateRoom = () => {
    try {
      RoomsService.create({ ...newRoom, price: Number(newRoom.price) })
      toast.success('A sala foi criada com sucesso')
    } catch (err) {
      toast.error('Error ao criar sala ' + err)
      console.error(err)
    }
  }
  return (
    <TableWrapper isSpaced>
      <Row>
        <Col>
          <InputGroup>
            <Form.Label lg={12} as={Col}>
              Nome da sala
            </Form.Label>

            <Form.Control
              type="text"
              required
              value={newRoom.name}
              onChange={e => {
                setNewRoom({ ...newRoom, name: e.target.value })
              }}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <Form.Label lg={12} as={Col}>
              Descrição
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              required
              value={newRoom.description}
              onChange={e => {
                setNewRoom({ ...newRoom, description: e.target.value })
              }}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Form.Label lg={6} as={Col}>
            Preço
          </Form.Label>
          <Form.Control
            type="number"
            required
            min={0}
            value={newRoom.price}
            onChange={e => {
              setNewRoom({ ...newRoom, price: e.target.value })
            }}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <InputGroup>
          <Form.Switch
            className="pr-2"
            checked={newRoom.avaliable}
            onChange={() =>
              setNewRoom({ ...newRoom, avaliable: !newRoom.avaliable })
            }
          />
          Disponível
        </InputGroup>
      </Row>
      <Row className="mt-2">
        <InputGroup>
          <Form.Switch
            checked={newRoom.internet}
            onChange={() =>
              setNewRoom({ ...newRoom, internet: !newRoom.internet })
            }
          />
          Internet
        </InputGroup>
      </Row>
      <Row className="mt-2">
        <InputGroup>
          <Form.Switch
            checked={newRoom.airConditioned}
            onChange={() =>
              setNewRoom({
                ...newRoom,
                airConditioned: !newRoom.airConditioned
              })
            }
          />
          Ar condicionado
        </InputGroup>
      </Row>
      <Row className="mt-2">
        <InputGroup>
          <Form.Switch
            checked={newRoom.bathroom}
            onChange={() =>
              setNewRoom({ ...newRoom, bathroom: !newRoom.bathroom })
            }
          />
          Banheiro
        </InputGroup>
      </Row>
      <Row className="mt-2">
        <InputGroup>
          <Form.Switch
            checked={newRoom.furnished}
            onChange={() =>
              setNewRoom({ ...newRoom, furnished: !newRoom.furnished })
            }
          />
          Mobiliada
        </InputGroup>
      </Row>
      <Row className="mt-2">
        <InputGroup>
          <Form.Switch
            checked={newRoom.roomCleaning}
            onChange={() =>
              setNewRoom({ ...newRoom, furnished: !newRoom.roomCleaning })
            }
          />
          Serviços de limpeza
        </InputGroup>
      </Row>
      <Col className="mt-5">
        <Button fullWidth onClick={handleCreateRoom}>
          Cadastrar sala
        </Button>
      </Col>
    </TableWrapper>
  )
}

export default RoomContainer
