import Loader from 'components/Loader'
import { CardsContainerTag } from './styles'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import RentService from 'services/rents'
import RoomsService from 'services/rooms'
import CardRoom from 'components/CardRoom'
import CardRent from 'components/Card'
import Pagination from 'components/shared/Pagination'
import { useRouter } from 'next/router'

type Privilege = {
  profile: 'admin' | 'especialista' | 'paciente'
}

const CardContainer: React.FC<Privilege> = ({ profile }) => {
  const isAdminOrEspecialist = profile === 'admin' || profile === 'especialista'
  const router = useRouter()
  const page = router.query.page

  if (!isAdminOrEspecialist) {
    const { data, error } = useSWR(
      `/storefront/v1/room_rents?length=12&page=${page}`,
      RentService.index
    )

    if (error) {
      toast.error('Erro ao obter dados dos consultórios!')
      console.log(error)
    }

    return (
      <>
        <CardsContainerTag>
          {!data ? (
            <Loader />
          ) : (
            data?.rents.map(rent => <CardRent rent={rent} />)
          )}
        </CardsContainerTag>
        <Pagination {...data?.meta!} />
      </>
    )
  }

  const { data, error } = useSWR(
    `/storefront/v1/rooms?length=12&page=${page}`,
    RoomsService.index
  )

  if (error) {
    toast.error('Erro ao obter dados das salas!')
    console.log(error)
  }
  return (
    <>
      <CardsContainerTag>
        {!data ? <Loader /> : data?.rooms.map(room => <CardRoom key={room.name} room={room} />)}
      </CardsContainerTag>
      <Pagination {...data?.meta!} />
    </>
  )
}
export default CardContainer
