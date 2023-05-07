function Button({
  variant,
  handler,
  text,
  type,
  onResetForm,
  isDisabled,
  onDisabled,
}) {

  function handleClick() {
    switch (handler) {
      case 'submit':
        return null
      case 'reset':
        onResetForm()
        break
      default:
        throw new Error('Button handler not found')
    }
  }

  let buttonClassName

  switch (variant) {
    case 'submit':
      buttonClassName =
        `
          w-60
          h-14
          bg-blue
          font-normal
          text-h2
          text-white
          rounded
          duration-300
          ${isDisabled ? 'opacity-50 cursor-auto' : 'hover:bg-opacity-30 hover:text-black active:shadow-button-shadow'}
        `
      break
    case 'reset':
      buttonClassName =
        `
          w-60
          h-14
          bg-gray
          font-normal
          text-h2
          text-black
          rounded
          duration-300
          hover:bg-opacity-30
          hover:text-black
          active:shadow-button-shadow
        `
      break
    default:
      throw new Error('Button variant not found')
  }

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      type={type}
      disabled={onDisabled}
    >
      {text}
    </button>
  )
}

export default Button
