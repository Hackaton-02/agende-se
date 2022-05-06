import Books from 'dtos/Books'
import api from './api'

interface BookedIndexData {
  consultsBooked: [Books]
  rentalOrders: [Books]
  consultOrders: [Books]
}

type BookUpdate = Pick<Books, 'id' | 'accepted'>

const BookedService = {
  index(url: string = '/storefront/v1/booked') {
    return api.get<BookedIndexData>(url).then(resp => resp.data)
  },
  update_especialist: ({ id, ...book }: BookUpdate) => {
    return api.patch<void>(`/especialista/v1/booked/${id}`, { book })
  },
  update_admin: ({ id, ...book }: BookUpdate) => {
    return api.patch<void>(`/admin/v1/booked/${id}`, { book })
  }
}

export default BookedService
