const fixedInputClass =
  'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'

export default function Input({
  onChange = (e: any) => {},
  value = '',
  label = '',
  labelFor = '',
  id = '',
  title = '',
  name = '',
  type = 'text',
  isRequired = false,
  placeholder = '',
  customClass = '',
  readOnly = false,
  autoFocus = false,
}) {
  return (
    <div className="my-10">
      <label
        htmlFor={labelFor}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={id}
        data-testid={id}
        name={name}
        type={type}
        required={isRequired}
        className={
          fixedInputClass + customClass + (readOnly ? ' bg-gray-100' : '')
        }
        placeholder={placeholder || label}
        title={title || label}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    </div>
  )
}
