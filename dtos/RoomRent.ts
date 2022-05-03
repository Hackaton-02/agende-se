import Room from './Room'
import User from './User'

export default interface RoomRent {
  id: number
  started_at: Date
  finish_at: Date
  user: User
  room: Room
  price: number
  created_at: Date
  updated_at: Date
  description: string
  title: string
  especialization: string
}
