export default function Message({
  text = '',
  type = 'info',
  customClass = '',
}) {
  return (
    <div className={'message ' + type + ' ' + customClass} data-testid="message">
      {text}
    </div>
  )
}
