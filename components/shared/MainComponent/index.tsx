import React from 'react'
import Header from 'components/Header'
import LoggedInUser from 'components/LoggedInUser'
import Logo from 'components/Logo'
import { useSelector } from 'react-redux'
import AuthState from 'dtos/AuthState'
import { useRouter } from 'next/router'
import * as S from './styles'
import SignOutService from 'utils/SignOutService'
import Link from 'next/link'

const MainComponent: React.FC = ({ children }) => {
  const { name } = useSelector((state: AuthState) => state.auth.loggedUser)
  const router = useRouter()

  return (
    <S.Wrapper className="d-flex flex-column sticky-footer-wrapper">
      <Header>
      <Link href="/Dashboard">
          <a>
            <Logo size="small" />
          </a>
        </Link>
        <div onClick={() => router.push('/Dashboard')} className="text-logo">
          Agende-se
        </div>
        <LoggedInUser>
          <span
            className="logout"
            onClick={() => {
              SignOutService.execute
              router.push('/')
            }}
          >
            Logout
          </span>
          <img src="/avatar.svg" onClick={() => router.push('/Profile')} />
          <span className="avatar">{name}</span>
        </LoggedInUser>
      </Header>
      <div className="container flex-fill">{children}</div>
    </S.Wrapper>
  )
}

export default MainComponent
