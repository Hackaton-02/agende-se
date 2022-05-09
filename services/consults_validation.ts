import api from './api'
interface ConsultIndexData {
  range: [Date]
}

const ConsultValidationService = {
  index(url: string) {
    return api.get<ConsultIndexData>(url).then(resp => resp.data)
  }
}

export default ConsultValidationService
