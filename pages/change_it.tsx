import { EmailPassword } from 'components/Auth'
import {
  FieldsContainer,
  Logo,
  LogoContainer,
  LogoText,
  TextContainer,
  Wrapper
} from 'components/Auth/styles'
import Button from 'components/Button'
import { Fields } from 'components/Fields'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import UsersService from 'services/users'

const changeIt: NextPage = () => {
  const [validated, setValidated] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [values, setValues] = useState({
    password: '',
    confirmation: '',
    email: ''
  })
  const { password, email } = EmailPassword(false, false, false)

  const newFields = {
    password,
    confirmation: {
      ...password,
      placeholder: 'Confirme sua senha',
      label: 'Confirmar Senha',
      helperText: 'A confirmação da senha é obrigatória',
      required: true
    }
  }

  const router = useRouter()
  const params = new URLSearchParams(window.location.search)
  const token = params.get('reset_password_token')

  useEffect(() => {
    if (token) setIsReset(true)
  }, [token])

  const fields = isReset ? newFields : { email }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidated(true)
    if (!isReset) {
      const url =
        process.env.NEXT_PUBLIC_FRONTEND_HOST ??
        'http://localhost:3001/change_it'

      try {
        UsersService.forgot({ email: values.email, redirect_url: url })
          .then(response => toast.success(response.data.message))
          .catch(data => toast.info(data.response.data.errors[0]))
      } catch (error) {
        toast.error('Um erro aconteceu: ' + error)
      }
    } else {
      try {
        UsersService.reset({
          password: values.password,
          password_confirmation: values.confirmation,
          reset_password_token: token!
        }).then(response => {
          toast.success(response.data.message)
          router.push('/')
        })
      } catch (error) {
        toast.error('Um erro aconteceu: ' + error)
      }
    }
  }
  return (
    <>
      <LogoContainer>
        <Logo /> <LogoText>Agende-se</LogoText>
      </LogoContainer>
      <Wrapper>
        <TextContainer>
          <p>Bem vindo de volta</p>
          <p>Faça login para continuar no Agende-se</p>
        </TextContainer>
        <FieldsContainer>
          <Form
            noValidate
            validated={validated}
            onSubmit={e => handleSubmit(e)}
          >
            <Row>
              <Fields
                values={values}
                setValues={setValues}
                disabled={false}
                fields={fields}
              />
            </Row>
            <div style={{ width: '80%', margin: '0 auto' }}>
              <Button fullWidth type="submit" className="mx-auto mt-5">
                {!!token ? 'Mudar senha' : 'Enviar email'}
              </Button>
            </div>

            <p
              className="link-text"
              onClick={() => {
                router.push('/')
                setIsReset(false)
              }}
            >
              Voltar para a página de Login
            </p>
          </Form>
        </FieldsContainer>
      </Wrapper>
    </>
  )
}

export default changeIt
