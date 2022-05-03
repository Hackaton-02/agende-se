export default interface Room {
  id?: number
  name: string
  price: number
  created_at?: Date
  updated_at?: Date
  avaliable: boolean
  features?: Features
  description: string
}

interface Features {
  internet: boolean
  airConditioned: boolean
  bathroom: boolean
  furnished: boolean
  roomCleaning: boolean
}
