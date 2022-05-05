import Menu from 'components/Menu'
import MainComponent from 'components/shared/MainComponent'
import TableUsers from 'components/TableUsers'
import { NextPage } from 'next'

const Users: NextPage = () => {
  return (
    <MainComponent>
      <Menu />
      <TableUsers />
    </MainComponent>
  )
}

export default Users
