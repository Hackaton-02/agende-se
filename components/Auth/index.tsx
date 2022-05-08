import { Fields } from 'components/Fields'
import LoginBtn from 'components/LoginBtn'
import { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import UsersService from 'services/users'
import { setLoggedUser } from 'store/modules/auth/reducer'
import * as S from './styles'

export const EmailPassword = (
  hideEmail: boolean = false,
  hidePassword: boolean = false,
  isReset: boolean = true
) => ({
  email: {
    helperText: 'email inválido ou obrigatório',
    placeholder: 'Insira seu email',
    type: 'email',
    required: true,
    reset: isReset,
    hidden: hideEmail,
    label: 'Email'
  },
  password: {
    helperText: 'A senha é obrigatória',
    placeholder: 'Insira sua senha',
    type: 'password',
    hidden: hidePassword,
    label: 'Senha',
    required: true
  }
})

const Auth = () => {
  const [validated, setValidated] = useState(false)
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: '',
    phone: ''
  })
  const [isSignup, setIsSignup] = useState(false)
  const commom = EmailPassword(false, false)

  const { password, email } = EmailPassword(false, false, false)

  const newFields = {
    name: {
      helperText: 'O campo nome é obrigatório',
      placeholder: 'Insira nome de usuário',
      label: 'Usuário',
      required: true
    },
    email,
    password,
    confirmation: {
      ...password,
      placeholder: 'Confirme sua senha',
      label: 'Confirmar Senha',
      helperText: 'A confirmação da senha é obrigatória',
      required: true
    },
    phone: {
      type: 'text',
      placeholder: 'Digite seu telefone',
      label: 'Contato',
      helperText: 'O telefone é obrigatório.',
      required: true
    }
  }

  const fields = isSignup ? newFields : commom

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    const form: any = document.querySelector('form')
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)

      return
    }
    event?.preventDefault()

    setValidated(true)
    const { email, password, phone } = values
    if (isSignup) {
      try {
        UsersService.signUp({
          name: values.name,
          email,
          password,
          phone,
          password_confirmation: values.confirmation
        })
        toast.success('Usuário cadastrado com sucesso!')
      } catch (error) {
        console.log(error)
        toast.error('Não foi possível cadastrar seu usuário...')
      }
      return
    }

    try {
      const response = await UsersService.signIn({ email, password })

      const {
        id,
        email: userEmail,
        name,
        profile,
        ...rest
      } = response.data.data

      const user = {
        id,
        name,
        email: userEmail,
        profile: profile,
        phone: rest.phone,
        whatsapp_avaliable: rest.whatsapp_avaliable
      }

      if (isError) {
        setIsError(false)
      }

      dispatch(setLoggedUser(user as any))
    } catch (err) {
      toast.error('E-mail ou senha inválidos!')
      setIsError(true)
    }
  }

  const form = document.querySelector('form')
  const isValid = form?.checkValidity()

  return (
    <>
      <S.LogoContainer>
        <S.Logo /> <S.LogoText>Agende-se</S.LogoText>
      </S.LogoContainer>
      <S.Wrapper>
        <S.TextContainer>
          <p>Bem vindo de volta</p>
          <p>Faça login para continuar no Agende-se</p>
        </S.TextContainer>
        <S.FieldsContainer>
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
            <LoginBtn
              error={isError}
              onLogin={handleSubmit as any}
              isValid={isValid!}
              isSignup={isSignup}
            />
            <p
              className="link-text"
              onClick={() => {
                setIsSignup(!isSignup)
                setValidated(false)
              }}
            >
              {isSignup ? 'Já tenho uma conta' : 'Não tenho uma conta'}
            </p>
          </Form>
        </S.FieldsContainer>
      </S.Wrapper>
    </>
  )
}

export default Auth
