import BookedContainer from 'components/BookedContainer'
import Loader from 'components/Loader'
import Menu from 'components/Menu'
import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import AuthState from 'dtos/AuthState'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import BookedService from 'services/booked'
import useSWR from 'swr'

const Bookmarked: NextPage = () => {
  const { profile } = useSelector((state: AuthState) => state.auth.loggedUser)

  const namespace =
    profile === 'admin'
      ? 'admin'
      : profile === 'especialista'
      ? 'especialista'
      : 'storefront'

  const { data, error } = useSWR(`/${namespace}/v1/booked`, BookedService.index)

  const params =
    profile === 'admin'
      ? data?.rentalOrders
      : profile === 'especialista'
      ? data?.consultOrders
      : data?.consultsBooked

  if (error) {
    toast.error('Erro ao obter dados das consultas ou alugueis!')
    console.log(error)
  }

  return (
    <MainComponent>
      <Menu />
      {!data ? (
        <Loader />
      ) : params?.length! < 1 ? (
        <NoData message="Não há consultas cadastradas" />
      ) : (
        <BookedContainer books={params!} />
      )}
    </MainComponent>
  )
}

export default Bookmarked
