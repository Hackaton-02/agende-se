import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import AuthState from 'dtos/AuthState'
import { useSelector } from 'react-redux'
import * as S from './styles'
import CardContainer from 'components/CardsContainer'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
  const user = useSelector((state: AuthState) => state.auth.loggedUser)

  return (
    <S.Wrapper>
      <Header>
        <Logo size="small" /> <div className="text-logo">Agende-se</div>
        <LoggedInUser>
          <span className="logout">Logout</span>
          <img src="avatar.svg" />
          <span className="avatar">{'John Smith'}</span>
        </LoggedInUser>
      </Header>
      <Menu />
      <CardContainer />
    </S.Wrapper>
  )
}

export default Dashboard
