import BlueBackground from 'components/shared/BlueBackground'
import MainComponent from 'components/shared/MainComponent'
import StyledButton from 'components/shared/StyledButton'
import AuthState from 'dtos/AuthState'
import User from 'dtos/User'
import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import * as S from './styles'
import useSWR from 'swr'
import AddressService from 'services/address'
import Menu from 'components/Storefront/Menu'
import { toast } from 'react-toastify'
import Loader from 'components/Loader'

const MainAdress: React.FC = () => {
  const user: User = useSelector((state: AuthState) => state.auth.loggedUser)
  const { data, error } = useSWR(user.id as any, AddressService.show)
  const address = data?.address

  const [city, setCity] = useState(address?.city)
  const [complement, setComplement] = useState(address?.complement)
  const [country, setCountry] = useState(address?.country)
  const [state, setState] = useState(address?.state)
  const [street, setStreet] = useState(address?.street)
  const [number, setNumber] = useState(address?.number)
  const [zipcode, setZipcode] = useState(address?.zipcode)

  if (error) {
    toast.error('Erro ao obter dados do seu endereço')
    console.log(error)
  }

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()

    try {
      await AddressService.update({
        city,
        complement,
        country,
        state,
        street,
        number,
        id: address?.id
      } as any)

      toast.info('Endereço atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualiar o usuário, tente novamente.')
      console.log(error)
    }
  }

  return (
    <MainComponent>
      <Menu tab="my_address" />
      {!data ? (
        <Loader />
      ) : (
        <S.FormWrapper>
          <Form onSubmit={handleFormSubmit}>
            <BlueBackground>
              <Row className="mb-4">
                <Col>
                  <span className="d-block">Informações Pessoais</span>
                  <small className={'blue_text'}>
                    Essas informações NÃO serão exibidas publicamente
                  </small>
                  <div className="pl-4 pr-4 pt-3">
                    <Form.Group>
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control
                        placeholder="Cidade"
                        className={'input_background'}
                        type="text"
                        value={city}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setCity(evt.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Complemento</Form.Label>
                      <Form.Control
                        placeholder="Complemento"
                        className={'input_background'}
                        type="text"
                        value={complement}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setComplement(evt.target.value)
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>País</Form.Label>
                      <Form.Control
                        placeholder="Páis"
                        className={'input_background'}
                        value={country}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setCountry(evt.target.value)
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Estado</Form.Label>
                      <Form.Control
                        placeholder="Estado"
                        className={'input_background'}
                        type="text"
                        value={state}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setState(evt.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Logradouro</Form.Label>
                      <Form.Control
                        placeholder="Coloque aqui o nome da sua rua"
                        className={'input_background'}
                        type="text"
                        value={street}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setStreet(evt.target.value)
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Nº</Form.Label>
                      <Form.Control
                        placeholder="Coloque aqui o número da sua rua"
                        className={'input_background'}
                        type="text"
                        value={number}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setNumber(evt.target.value)
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cep</Form.Label>
                      <Form.Control
                        placeholder="Coloque aqui seu cep"
                        className={'input_background'}
                        type="text"
                        value={zipcode}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                          setZipcode(evt.target.value)
                        }
                      />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </BlueBackground>

            <div className="float-right mt-4 mb-4">
              <StyledButton
                icon={'fa fa-user'}
                action="Salvar alterações"
                type_button="blue"
                type="submit"
              />
            </div>
          </Form>
        </S.FormWrapper>
      )}
    </MainComponent>
  )
}

export default MainAdress
