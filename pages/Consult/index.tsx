import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import Menu from 'components/Storefront/Menu'
import { GetServerSidePropsContext } from 'next'

const Consult: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab="my_consults" />
      <NoData message="Ainda não implementado" />
    </MainComponent>
  )
}

export default Consult

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
