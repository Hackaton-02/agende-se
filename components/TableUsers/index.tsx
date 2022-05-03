import { Table } from 'react-bootstrap'
import * as S from './styles'
import useSWR from 'swr'
import UsersService from 'services/users'
import { toast } from 'react-toastify'
import Loader from 'components/Loader'
import Pagination from "components/shared/Pagination"
import { useRouter } from 'next/router'

const TableUsers: React.FC = () => {

  const router = useRouter()
  const page = router.query.page

  const { data, error } = useSWR(`/admin/v1/users?page=${page}`, UsersService.index)

  if (error) {
    toast.error('Erro ao obter dados dos usuários')
    console.log(error)
  }

  const users = data?.users

  const handleEdit = (id: number) => {}

  const handleRemove = (id: number) => {}

  return (
    <>
    <S.TableWrapper>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Perfil</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {!data && <Loader />}
          {users?.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.profile.toLowerCase()}</td>
              <td>{user.email}</td>
              <td>
                <i
                  className="fa fa-edit"
                  style={{
                    color: 'grey',
                    cursor: 'pointer',
                    marginRight: '30px'
                  }}
                  onClick={() => handleEdit(user.id)}
                />
                <i
                  className="fa fa-trash"
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleRemove(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </S.TableWrapper>
    <Pagination {...data?.meta!} />

    </>
  )
}

export default TableUsers
