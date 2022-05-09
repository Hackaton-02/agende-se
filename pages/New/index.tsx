import Menu from 'components/Menu'
import Container from 'components/NewRoom'
import MainComponent from 'components/shared/MainComponent'
import { GetServerSidePropsContext, NextPage } from 'next'

const New: NextPage = () => {
  return (
    <MainComponent>
      <Menu />
      <Container />
    </MainComponent>
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
