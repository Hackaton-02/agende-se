import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import Menu from 'components/Storefront/Menu'
import { GetServerSidePropsContext } from 'next'

const List: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab='orders' />
      <NoData message="Ainda não implementado" />
    </MainComponent>
  )
}

export default List

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
