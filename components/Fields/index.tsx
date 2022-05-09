import { Dispatch, SetStateAction } from 'react'
import { Col, Form } from 'react-bootstrap'

import Link from 'next/link'

type Fields = {
  fields: any
  values?: { [key: string]: string }
  setValues: Dispatch<
    SetStateAction<{
      name: string
      email: string
      password: string
      confirmation: string
    }>
  >
  disabled: boolean
}
export const Fields: any = ({
  fields,
  values,
  setValues,
  disabled
}: Fields) => {
  return Object.keys(fields).map((field: any, i) => {
    return !fields[field].hidden ? (
      <Col key={fields[field].label}>
        <Form.Group className="mx-auto" controlId={`validationCustom${i}`}>
          <Form.Label as={Col} lg={12}>
            {fields[field].label}
          </Form.Label>
          <Form.Control
            required={fields[field].required}
            value={values![field]}
            disabled={disabled}
            onChange={e => {
              setValues({ ...values, [field]: e.target.value } as any)
            }}
            type={fields[field].type}
            placeholder={fields[field].placeholder}
          />
          <Form.Control.Feedback type="invalid" className="mx-auto">
            {fields[field].helperText}
          </Form.Control.Feedback>
          {field === 'email' && fields[field].reset && (
            <Link href={'/change_it'}>
              <a style={{ cursor: 'pointer' }} className="link-text">
                Esqueci minha senha
              </a>
            </Link>
          )}
        </Form.Group>
      </Col>
    ) : undefined
  })
}
