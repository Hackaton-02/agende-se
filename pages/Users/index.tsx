import Menu from 'components/Menu'
import MainComponent from 'components/shared/MainComponent'
import TableUsers from 'components/TableUsers'
import { GetServerSidePropsContext, NextPage } from 'next'

const Users: NextPage = () => {
  return (
    <MainComponent>
      <Menu />
      <TableUsers />
    </MainComponent>
  )
}

export default Users

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
