export function format(rfc3339DateTime) {
  const date = new Date(Date.parse(rfc3339DateTime)).toString()
  const index = date.indexOf('GMT')
  if (index > 0) return date.substring(0, index)
  return date
}
