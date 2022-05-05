import User from './User'

export default interface Consult {
  id?: number
  started_at: Date
  finish_at: Date
  user: User
  created_at?: Date
  updated_at?: Date
  room_rent_id: number
  payment_attributes?: { amount: number; method: string; date: Date }
}
