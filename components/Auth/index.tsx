import { Fields } from 'components/Fields'
import LoginBtn from 'components/LoginBtn'
import { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import * as S from './styles'

export const EmailPassword = (
  hideEmail: boolean = false,
  hidePassword: boolean = false,
  isEmailRequired: boolean,
  isPassRequired: boolean
) => ({
  email: {
    helperText: 'email inválido ou obrigatório',
    placeholder: 'Insira seu email',
    type: 'email',
    required: true,
    hidden: hideEmail,
    label: 'Email'
  },
  password: {
    helperText:
      'A senha é obrigatória',
    placeholder: 'Insira sua senha',
    type: 'password',
    hidden: hidePassword,
    label: 'Senha',
    required: true
  }
})

const Auth = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: ''
  })
  const [isSignup, setIsSignup] = useState(false)
  const commom = EmailPassword(false, false, false, false)

  const { password, email } = EmailPassword(false, false, false, false)

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
      helperText: 'A confirmação da senha é obrigatória'
    }
  }

  const fields = isSignup ? newFields : commom

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const form = document.querySelector("form")
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Fields
                values={values}
                setValues={setValues}
                disabled={false}
                fields={fields}
              />

            </Row>
            <LoginBtn isValid={isValid!} isSignup={isSignup} />
              <p
              className='link-text'
                onClick={() => {
                  setIsSignup(!isSignup)
                  setValidated(false);

                }}
              >
              {isSignup ? "Já tenho uma conta" : "Não tenho uma conta"}
              </p>
          </Form>
        </S.FieldsContainer>
      </S.Wrapper>
    </>
  )
}

export default Auth
