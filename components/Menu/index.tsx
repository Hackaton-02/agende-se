import { Col, Row } from 'react-bootstrap'
import * as S from './styles'
import DashIcon from '../../public/Home'
import BookIcon from '../../public/Bookmarked'
import UserIcon from '../../public/User'

import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

const Menu: React.FC = () => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <S.Wrapper>
      <Row>
        <Col>
          <DashIcon
            color={
              router.pathname === '/Dashboard'
                ? theme.colors.primary
                : theme.colors.white
            }
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Dashboard'
                ? { color: theme.colors.primary }
                : { color: theme.colors.white }
            }
          >
            Dashboard
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <BookIcon
            color={
              router.pathname === '/Bookmarked'
                ? theme.colors.primary
                : theme.colors.white
            }
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Bookmarked'
                ? { color: theme.colors.primary }
                : { color: theme.colors.white }
            }
          >
            Bookmarked
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserIcon
            color={
              router.pathname === '/Users'
                ? theme.colors.primary
                : theme.colors.white
            }
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Users'
                ? { color: theme.colors.primary }
                : { color: theme.colors.white }
            }
          >
            Usuários
          </p>
        </Col>
      </Row>
      <Row >
        <i
        className='fa fa-plus-circle'
         style={router.pathname === '/Rooms'
         ?
          { color: theme.colors.primary }
          : { color: theme.colors.white }
        }
        />
        <p
          style={
            router.pathname === '/Rooms'
              ? { color: theme.colors.primary }
              : { color: theme.colors.white }
          }
        >
          Cadastrar sala
        </p>
      </Row>
    </S.Wrapper>
  )
}

export default Menu
