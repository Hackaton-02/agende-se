import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Container from 'components/NewRoom'
import AuthState from 'dtos/AuthState'
import { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import * as S from './styles'

const New: NextPage = () => {
  const { name } = useSelector((state: AuthState) => state.auth.loggedUser)

  return (
    <S.Wrapper>
      <Header>
        <Link href="/Dashboard">
          <a>
            <Logo size="small" />
          </a>
        </Link>
        <div className="text-logo">Agende-se</div>
        <LoggedInUser>
          <span className="logout">Logout</span>
          <img src="avatar.svg" />
          <span className="avatar">{name}</span>
        </LoggedInUser>
      </Header>
      <Menu />
      <Container />
    </S.Wrapper>
  )
}

export default New

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
