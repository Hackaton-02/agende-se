import api from './api'
import Room from '../dtos/Room'
import Meta from 'dtos/Meta'

interface RoomsIndexData {
  rooms: Room[]
  meta: Meta
}

const RoomsService = {
  index(url: string = '/storefront/v1/rooms') {
    return api.get<RoomsIndexData>(url).then(resp => resp.data)
  },

  create: (room: Room) => {
    return api.post<void>('/admin/v1/rooms', room)
  },

  show(id: number) {
    return api.get<Room>(`/storefront/v1/rooms/${id}`).then(resp => resp.data)
  }
}

export default RoomsService
