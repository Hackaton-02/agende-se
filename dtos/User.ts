export default interface User {
  id: number
  name: string
  email: string
  profile: 'admin' | 'especialista' | 'paciente'
  password?: string
  phone: number
  password_confirmation?: string
  whatsapp_avaliable: boolean
}
