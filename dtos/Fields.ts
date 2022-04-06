export type Field = {
  name: Name
  email: Email
  password: Password
  confirmation: Confirmation
}

export type Name = {
  helperText: string
  placeholder: string
  label: string
}

export type Email = {
  helperText: string
  placeholder: string
  type: string
  hidden: boolean
  label: string
  required: boolean
}

export type Password = {
  helperText: string
  placeholder: string
  type: string
  hidden: boolean
  label: string
  required: boolean
}

export type Confirmation = {
  helperText: string
  placeholder: string
  type: string
  hidden: boolean
  label: string
  required: boolean
}
