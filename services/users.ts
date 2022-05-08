import api from './api'
import User from 'dtos/User'
import Meta from 'dtos/Meta'

interface SignInData {
  email: string
  password: string
}

interface SignInResponse {
  data: User
}

interface SignUpData {
  name: string
  email: string
  password: string
  phone: string
  password_confirmation: string
  profile?: number
}

interface UsersIndexData {
  users: User[]
  meta: Meta
}

interface ForgotPassword {
  email: string
  redirect_url: string
}

interface ResetPassword {
  reset_password_token: string
  password: string
  password_confirmation: string
}

interface AuthResponse {
  message: string
}

const UsersService = {
  signUp: ({ name, email, password, password_confirmation, phone }: SignUpData) =>
    api.post<void>('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation,
      phone,
      profile: 1
    }),
  signIn: ({ email, password }: SignInData) =>
    api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password
    }),
  update(user: User) {
    return api.put(`/admin/v1/users/${user.id}`, { user: user })
  },
  index(url: string = '/admin/v1/users') {
    return api.get<UsersIndexData>(url).then(resp => resp.data)
  },
  forgot: ({ email, redirect_url }: ForgotPassword) => {
    return api.post<AuthResponse>('/auth/v1/user/password', { email, redirect_url })
  },
  reset: ({
    reset_password_token,
    password,
    password_confirmation
  }: ResetPassword) => {
    return api.patch<AuthResponse>('/auth/v1/user/password', {
      reset_password_token,
      password,
      password_confirmation
    })
  }
}

export default UsersService
