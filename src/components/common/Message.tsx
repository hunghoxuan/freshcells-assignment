const infoClass = 'text-blue-500'
const errorClass =
  'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
const successClass = 'text-green-500 text-xs italic'

export default function Message({
  text = '',
  type = 'info',
  customClass = '',
}) {
  const className =
    type == 'info'
      ? infoClass
      : type == 'error'
        ? errorClass
        : type == 'success'
          ? successClass
          : ''
  return (
    <div className={className + customClass} data-testid="message">
      {text}
    </div>
  )
}
