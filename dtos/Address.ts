import User from "./User"

export default interface Address {
  id: number
  street: string
  number: string
  complement: string
  city: string
  state: string
  country: string
  zipcode: string
  user: User
  created_at: Date
  updated_at: Date
}
