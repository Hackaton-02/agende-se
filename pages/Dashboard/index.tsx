import Menu from 'components/Menu'
import AuthState from 'dtos/AuthState'
import { useSelector } from 'react-redux'
import CardContainer from 'components/CardsContainer'
import { NextPage } from 'next'
import MainComponent from 'components/shared/MainComponent'

const Dashboard: NextPage = () => {
  const { profile } = useSelector((state: AuthState) => state.auth.loggedUser)

  return (
    <MainComponent>
      <Menu />
      <CardContainer profile={profile} />
    </MainComponent>
  )
}

export default Dashboard
