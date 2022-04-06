import { Field } from 'dtos/Fields'
import { Dispatch, SetStateAction } from 'react'
import { Col, Form, FormControl, FormLabel, InputGroup } from 'react-bootstrap'

type Fields = {
  fields: Partial<Field>
  values?: object
  setValues: Dispatch<
    SetStateAction<{
      name: string
      email: string
      password: string
      confirmation: string
    }>
  >
  disabled: boolean
  handleSubmit?: any
}
export const Fields: any = ({
  fields,
  values,
  setValues,
  disabled,
  handleSubmit
}: Fields) => {
  return Object.keys(fields).map((field: unknown, i) => {
    return !fields[field].hidden ? (
      <Col key={fields[field].label}>
        <Form.Group className="mx-auto" controlId={`validationCustom${i}`}>
          <Form.Label as={Col} lg={12}>
            {fields[field].label}
          </Form.Label>
          <Form.Control
            required={fields[field].required}
            value={values ? values[field] : undefined}
            disabled={disabled}
            //  name={fields[field].name}
            onChange={e => {
              setValues({ ...values, [field]: e.target.value })
            }}
            type={fields[field].type}
            placeholder={fields[field].placeholder}
          />
          <Form.Control.Feedback type="invalid" className="mx-auto">
            {fields[field].helperText}
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    ) : undefined
  })
}
