import api from './api';
import  Address  from 'dtos/Address';

interface AddressIndexData {
  address: Address
}

const AddressService = {
  show(id: number) {
    return api.get<AddressIndexData>(`/storefront/v1/address/${id}`).then(resp => resp.data);
  },

  update: ({id, ...rest}: Address) => {
    return api.put<void>(`/storefront/v1/address/${id}`, { address: rest });
  },

  create: (address: Address) => {
    return api.post<void>('/storefront/v1/address', address);
  },

  delete: (id: number) => {
    return api.delete<void>(`/storefront/v1/address/${id}`);
  }

}

export default AddressService;
