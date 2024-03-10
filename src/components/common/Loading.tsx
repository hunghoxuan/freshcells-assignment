export default function Loading({
  text = '...',
  type = 'info',
  customClass = '',
}) {
  return <p className={customClass}>{text}</p>
}
