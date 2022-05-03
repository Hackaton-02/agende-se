import api from './api';
import Consult from 'dtos/Consult';

interface ConsultIndexData {
  consults: Consult[]
}

const ConsultService = {
  index(url: string = "/storefront/v1/consults") {
    return api.get<ConsultIndexData>(url).then(resp => resp.data.consults);
  },
  create: (consult: Consult) => {
    return api.post<void>('/storefront/v1/consults', consult);
  },

  update: ({id, ...rest}: Consult) => {
    return api.put<void>(`/storefront/v1/consults/${id}`, { rest });
  },

  delete: (id: number) => {
    return api.delete<void>(`/storefront/v1/consults/${id}`);
  }
}

export default ConsultService;
