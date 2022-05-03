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
  password_confirmation: string
}

interface UsersIndexData {
  users: User[]
  meta: Meta
}

const UsersService = {
  signUp: ({ name, email, password, password_confirmation }: SignUpData) =>
    api.post<void>('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
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
  }
}

export default UsersService
