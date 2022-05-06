import Room from './Room'
import User from './User'

export default interface Books {
  id?: number
  user: User
  room: Room
  admin: boolean
  recepient_id: number
  created_at: Date
  updated_at: Date
  accepted: 'pending' | 'agreed' | 'rejected' | number
}
