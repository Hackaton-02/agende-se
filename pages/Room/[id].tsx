import RoomInfo from 'components/RoomInfo'
import DatePicker from 'react-datepicker'
import RoomFeatures from 'components/RoomFeatures'

import * as S from 'components/shared/FormStyles/styles'
import { Col, Row } from 'react-bootstrap'
import { GetServerSidePropsContext, NextPage } from 'next'
import ModalRent from 'components/Modal'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AuthState from 'dtos/AuthState'
import useSWR from 'swr'
import RoomsService from 'services/rooms'
import { toast } from 'react-toastify'
import Loader from 'components/Loader'
import BookingValidationService from 'services/booking_validation'
import ConsultValidationService from 'services/consults_validation'
import RentService from 'services/rents'
import MainComponent from 'components/shared/MainComponent'

type Props = {
  id: number
  rent: boolean
}
const Room: NextPage<Props> = ({ id, rent }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { profile } = useSelector((state: AuthState) => state.auth.loggedUser)

  const { data, error } = useSWR(
    id as any,
    ((!rent && RoomsService.show) || RentService.show) as any
  )
  const { data: bookedDates, error: dateError } = useSWR(
    profile != 'paciente'
      ? `/especialista/v1/rooms_rent/${id}/booked`
      : `/storefront/v1/consults/${id}/validations`,
    profile != 'paciente'
      ? BookingValidationService.index
      : ConsultValidationService.index
  )

  if (error) {
    toast.error('Erro ao obter dados dos consultórios!')
    console.log(error)
  }

  if (dateError) {
    toast.error('Erro ao obter dados das reservas')
  }

  const handleModal = () => {
    setIsVisible(prevState => !prevState)
  }

  const excludedDates = bookedDates?.range.map(item => new Date(item))

  const photo = 'https://placeimg.com/1000/500/arch'

  return (
    <MainComponent>
      <S.Wrapper className="container">
        <S.Cover url={photo} isRandom={false} />
        {!data ? (
          <Loader />
        ) : (
          <S.Main>
            <S.SectionRoomInfo>
              <RoomInfo info={data as any} onClick={handleModal} />
            </S.SectionRoomInfo>
            <hr />
            <Row lg={12}>
              <Col lg={6} sm={12} xs={12} className="features-right">
                {!rent && <RoomFeatures room={data} />}
              </Col>
              <Col lg={6} sm={12} xs={12} className="features-left">
                <Row sm={12} className="time-left">
                  <Col lg={6} sm={12}>
                    <h3 className="mt-5 mb-3 time-text">Dias disponíveis</h3>
                  </Col>
                  <Col lg={6}>
                    <DatePicker
                      onChange={() => {}}
                      minDate={new Date()}
                      inline
                      excludeDates={excludedDates}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </S.Main>
        )}

        <ModalRent
          price={data?.price}
          excludeDates={excludedDates || ([] as any)}
          isVisible={isVisible}
          id={id}
          onClose={handleModal}
        />
      </S.Wrapper>
    </MainComponent>
  )
}

export default Room

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
    props: { id: context.params!.id!, rent: context.query.rent || null }
  }
}
