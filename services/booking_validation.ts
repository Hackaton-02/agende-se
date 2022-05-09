import api from './api'

interface BookingIndexData {
  range: [Date]
}

const BookingValidationService = {
  index(url: string) {
    return api.get<BookingIndexData>(url).then(resp => resp.data)
  }
}

export default BookingValidationService
