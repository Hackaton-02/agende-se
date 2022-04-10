import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import { NextPage } from 'next'
import * as S from './styles'


const Bookmarked: NextPage = () => {


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
    </S.Wrapper>
  )
}

export default Bookmarked
