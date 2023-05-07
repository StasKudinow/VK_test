import { Field } from 'formik'

function Select(props) {

  const { label, name, options, isDisabled, onDisabled, ...rest } = props

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
      <Field
        className={dateViewClassName}
        as="select"
        id={name}
        name={name}
        {...rest}
        disabled={onDisabled}
      >
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.key}
            </option>
          )
        })}
      </Field>
    </div>
  )
}

export default Select
