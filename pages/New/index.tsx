import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Container from 'components/NewRoom'
import { NextPage } from 'next'
import Link from 'next/link'
import * as S from './styles'

const New: NextPage = () => {
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
          <span className="avatar">{'John Smith'}</span>
        </LoggedInUser>
      </Header>
      <Menu />
      <Container />
    </S.Wrapper>
  )
}

export default New