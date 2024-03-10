type ActionType = 'submit' | 'reset' | 'button' | undefined
export default function Button({
  onClick = (e: any) => {},
  onSubmit = (e: any) => e.preventDefault(),
  type = 'submit',
  className = 'btn-primary',
  title = '',
  text = '',
  id = '',
}) {
  return (
    <>
      <button
        type={type as ActionType}
        data-testid={id}
        className={className + ' btn'}
        onSubmit={onSubmit}
        onClick={onClick}
        title={title || text}
      >
        {text}
      </button>
    </>
  )
}
