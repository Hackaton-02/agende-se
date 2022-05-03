import Books from 'dtos/Books';
import api from './api';

interface BookedIndexData {
  consultsBooked: [Books]
}

const BookedService = {
  index(url: string = "/storefront/v1/booked") {
    return api.get<BookedIndexData>(url).then(resp => resp.data);
  }
}

export default BookedService;
