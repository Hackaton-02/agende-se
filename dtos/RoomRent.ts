import Room from './Room'
import User from './User'

export default interface RoomRent {
  id: number
  started_at: Date
  finish_at: Date
  user: User
  room: Room
  price: number
  created_at?: Date
  updated_at?: Date
  description: string
  title: string
  payment_attributes?: { amount: number; method: string; date: Date }
  especialization: string
}

export type Rent = Pick<RoomRent, "started_at" | "finish_at" | "payment_attributes" | "user">
