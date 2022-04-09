import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import RoomInfo from 'components/RoomInfo'
import DatePicker from 'react-datepicker'
import RoomFeatures from 'components/RoomFeatures'
import 'react-datepicker/dist/react-datepicker.css'

import * as S from './styles'
import { Row } from 'react-bootstrap'
import Link from 'next/link'

const Room: React.FC = () => {
  const info = {
    title: 'Nome da sala',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis magna velit in massa. Ornare aliquet feugiat diam quis urna, nibh. Ac pellentesque proin viverra velit venenatis enim aliquam. Risus hac iaculis odio scelerisque turpis.',
    price: 20,
    id: '1'
  }
  const room = {
    bathroom: false,
    airConditioned: true,
    petsAllowed: false,
    internet: true,
    roomCleaning: true
  }

  return (
    <S.Wrapper>
      <Header>
        <Link href="/Dashboard">
          <a>
            <Logo size="small" />
          </a>
        </Link>
        <div className="text-logo">Agende-se</div>
        <LoggedInUser>
          <span className="logout">Logout</span>
          <img src="avatar.svg" />{' '}
          <span className="avatar">{'John Smith'}</span>
        </LoggedInUser>
      </Header>
      <S.Cover />
      <S.Main>
        <S.SectionRoomInfo>
          <RoomInfo info={info} />
        </S.SectionRoomInfo>
        <hr />
        <Row>
          <div className="col-12 col-md-6 col-lg-8">
            <RoomFeatures room={room} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 datapicker-container">
            <h3 className="mt-5 mb-3">Dias disponíveis</h3>
            <DatePicker
              className="w-100"
              //  selected={checkInDate}
              onChange={() => {}}
              //  startDate={checkInDate}
              // endDate={checkOutDate}
              minDate={new Date()}
              selectsRange
              inline
              //  excludeDates={excludedDates}
            />
          </div>
        </Row>
      </S.Main>
    </S.Wrapper>
  )
}

export default Room
