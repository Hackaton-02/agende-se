import { Form, Row, Col } from 'react-bootstrap'

import BlueBackground from 'components/shared/BlueBackground'
import MainComponent from 'components/shared/MainComponent'
import Menu from 'components/Storefront/Menu'
import StyledButton from 'components/shared/StyledButton'

import { useSelector, useDispatch } from 'react-redux'
import User from '../../dtos/User'
import { setLoggedUser } from '../../store/modules/auth/reducer'
import ApiResponseError from 'dtos/ApiResponseError'
import { toast } from 'react-toastify'
import { useState } from 'react'
import ProfileService from 'services/profile'
import AuthState from 'dtos/AuthState'
import { FormWrapper } from 'pages/Address/styles'
import {
  GetServerSidePropsContext,
  NextComponentType,
  NextPageContext
} from 'next'

const Profile: NextComponentType<NextPageContext, any, {}> = () => {
  const user: User = useSelector((state: AuthState) => state.auth.loggedUser)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [whatsapp, setWhatsapp] = useState(user.whatsapp_avaliable)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const dispatch = useDispatch()

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()

    try {
      await ProfileService.update({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        id: user.id,
        profile: user.profile,
        whatsapp_avaliable: whatsapp
      } as any)

      toast.info('Usuário atualizado com sucesso!')

      dispatch(
        setLoggedUser({
          name,
          email,
          id: user.id,
          profile: user.profile,
          whatsapp_avaliable: whatsapp,
          phone: phone
        } as any)
      )
    } catch (error: any) {
      const err: ApiResponseError = error.response.data.errors.full_messages[0]
      toast.error(err)
      console.log(error)
    } finally {
      setPassword('')
      setPasswordConfirmation('')
    }
  }

  return (
    <MainComponent>
      <Menu tab="personal_data" />
      <FormWrapper>
        <Form className={'form'} onSubmit={handleFormSubmit}>
          <BlueBackground>
            <div>
              <strong className="d-block">{user.name}</strong>
              <span className={'blue_text'}>{user.email} </span>
            </div>

            <Row className="mt-4">
              <Col xs={12}>
                <div>
                  <span className="d-block">Informações Pública</span>
                  <small className={'blue_text'}>
                    Essas informações serão exibidas publicamente
                  </small>

                  <Form.Group className="p-4">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      placeholder="Nome de exibição"
                      className={'input_background'}
                      value={name}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setName(evt.target.value)
                      }
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <span className="d-block">Informações Pessoais</span>
                <small className={'blue_text'}>
                  Essas informações NÃO serão exibidas publicamente
                </small>

                <div className="pl-4 pr-4 pt-3">
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      placeholder="E-mail"
                      className={'input_background'}
                      type="email"
                      value={email}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(evt.target.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      placeholder="Telefone"
                      className={'input_background'}
                      type="phone"
                      value={phone}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setPhone(Number(evt.target.value))
                      }
                    />
                  </Form.Group>

                  <Form.Label>Whatsapp</Form.Label>
                  <Form.Select
                    placeholder="Whatsapp"
                    className={'input_background'}
                    value={!!whatsapp ? 'SIM' : 'NÃO'}
                    onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setWhatsapp(!whatsapp) as any
                    }
                  >
                    <option>SIM</option>
                    <option>NÃO</option>
                  </Form.Select>

                  <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      placeholder="Senha"
                      className={'input_background'}
                      type="password"
                      value={password}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(evt.target.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Repetir Senha</Form.Label>
                    <Form.Control
                      placeholder="Repetir Senha"
                      className={'input_background'}
                      type="password"
                      value={passwordConfirmation}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setPasswordConfirmation(evt.target.value)
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
      </FormWrapper>
    </MainComponent>
  )
}

export default Profile

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authToken = context.req.cookies['api-agendese']

  if (!authToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
