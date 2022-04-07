import CardContainer from 'components/CardsContainer'
import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import AuthState from 'dtos/AuthState'
import { useSelector } from 'react-redux'

const Dashboard: React.FC = () => {
  const user = useSelector((state: AuthState) => state.auth.loggedUser)

  return (
    <>
      <Header>
        <Logo size="small" /> <div className="text-logo">Agende-se</div>
        <LoggedInUser>
          <span className="logout">Logout</span>
          <img src="avatar.svg" /> <span className='avatarName'>{'John Smith'}</span>
        </LoggedInUser>
      </Header>
      <Menu />
      <CardContainer />
    </>
  )
}

export default Dashboard
