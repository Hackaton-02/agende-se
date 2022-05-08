import Menu from 'components/Menu'
import AuthState from 'dtos/AuthState'
import { useSelector } from 'react-redux'
import CardContainer from 'components/CardsContainer'
import { GetServerSidePropsContext, NextPage } from 'next'
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
