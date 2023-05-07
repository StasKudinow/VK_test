import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field } from 'formik'

function DatePicker(props) {

  const { label, name, isDisabled, onDisabled, ...rest } = props

  const dateViewClassName = `
    w-80
    h-10
    bg-gray
    rounded
    font-normal
    text-p
    text-black
    text-center
    hover:cursor-pointer
    ${isDisabled ? 'opacity-50 pointer-events-none' : ''}
  `

  return (
    <div className="w-80 flex flex-col items-center">
      <label
        className={`font-normal text-h2 text-black ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      <Field name={name}>
        {
          ({form, field}) => {
            const { setFieldValue } = form
            const { value } = field
            return (
              <DateView
                className={dateViewClassName}
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => setFieldValue(name, val)}
                readOnly={onDisabled}
              />
            )
          }
        }
      </Field>
    </div>
  )
}

export default DatePicker
