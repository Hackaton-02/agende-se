import BookedContainer from 'components/BookedContainer'
import Loader from 'components/Loader'
import Menu from 'components/Menu'
import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import { NextPage } from 'next'
import { toast } from 'react-toastify'
import BookedService from 'services/booked'
import useSWR from 'swr'

const Bookmarked: NextPage = () => {
  const { data, error } = useSWR(`/storefront/v1/booked`, BookedService.index)

  if (error) {
    toast.error('Erro ao obter dados dos consultórios!')
    console.log(error)
  }
  console.log(data)

  return (
    <MainComponent>
      <Menu />
      {!data ? (
        <Loader />
      ) : data.consultsBooked.length < 1 ? (
        <NoData message="não há consultas cadastradas" />
      ) : (
        <BookedContainer books={data.consultsBooked} />
      )}
    </MainComponent>
  )
}

export default Bookmarked
