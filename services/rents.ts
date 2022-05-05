import api from './api';
import RoomRent, { Rent } from '../dtos/RoomRent';
import Meta from 'dtos/Meta';

interface RoomRentsIndexData {
  rents: RoomRent[]
  meta: Meta
}

const RentService = {
  index(url: string = "/storefront/v1/room_rents") {
    return api.get<RoomRentsIndexData>(url).then(resp => resp.data);
  },

  show(id: number) {
    return api.get<RoomRent>(`/storefront/v1/room_rents/${id}`).then(resp => resp.data);
  },

  create: (room_rent: Rent) => {
    return api.post<void>('/especialista/v1/room_rents', room_rent);
  }

}

export default RentService;
