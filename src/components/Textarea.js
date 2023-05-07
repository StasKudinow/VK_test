import { Field } from 'formik'

function Textarea(props) {

  const { label, name, ...rest } = props

  return (
    <div className="w-80 flex flex-col items-center">
      <label className="font-normal text-h2 text-black" htmlFor={name}>{label}</label>
      <Field
        className="w-80 h-48 p-2 bg-white border rounded font-normal text-p text-black"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
    </div>
  )
}

export default Textarea
