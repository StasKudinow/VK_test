import Select from './Select'
import DatePicker from './DatePicker'
import Textarea from './Textarea'

function FormController(props) {

  const { controller, ...rest } = props

  switch (controller) {
    case 'select':
      return <Select {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    default:
      throw new Error('Controller not found')
  }
}

export default FormController
