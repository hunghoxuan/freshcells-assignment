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
        className="label"
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
          'input' + customClass + (readOnly ? ' disabled' : '')
        }
        placeholder={placeholder || label}
        title={title || label}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    </div>
  )
}
