import { Col, Row } from 'react-bootstrap'
import * as S from './styles'
import DashIcon from '../../public/Home'
import BookIcon from '../../public/Bookmarked'
import UserIcon from '../../public/User'

import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { useSelector } from 'react-redux'
import AuthState from 'dtos/AuthState'

const Menu: React.FC = () => {
  const { profile } = useSelector((state: AuthState) => state.auth.loggedUser)

  const router = useRouter()
  const theme = useTheme()
  const isAdmin = profile === 'admin'

  return (
    <S.Wrapper>
      <Row>
        <Col onClick={() => router.push('/Dashboard')}>
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
        <Col onClick={() => router.push('/Bookmarked')}>
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
      {isAdmin && (
        <>
        <Row>
          <Col onClick={() => router.push('/Users')}>
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
           <Row>
           <i
             className="fa fa-plus-circle"
             onClick={() => router.push('/New')}
             style={
               router.pathname === '/New'
                 ? { color: theme.colors.primary }
                 : { color: theme.colors.white }
             }
           />
           <p
             style={
               router.pathname === '/New'
                 ? { color: theme.colors.primary }
                 : { color: theme.colors.white }
             }
           >
             Cadastrar sala
           </p>
         </Row>
         </>
      )}

    </S.Wrapper>
  )
}

export default Menu
