type ActionType = 'submit' | 'reset' | 'button' | undefined
export default function Button({
  onClick = (e: any) => {},
  onSubmit = (e: any) => e.preventDefault(),
  type = 'submit',
  style = 'primary',
  title = '',
  text = '',
  id = '',
}) {
  const className =
    style == 'primary'
      ? 'text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 '
      : style == 'secondary'
        ? 'border-gray text-black bg-white-500 hover:bg-gray-100 '
        : ''
  return (
    <>
      <button
        type={type as ActionType}
        data-testid={id}
        className={
          className +
          'group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md mt-10'
        }
        onSubmit={onSubmit}
        onClick={onClick}
        title={title || text}
      >
        {text}
      </button>
    </>
  )
}
