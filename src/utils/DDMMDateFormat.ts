export function DDMMDateFormat(fullDate: Date) {
  const date = new Date(fullDate)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const formattedDate = `${dd}.${mm}`
  return formattedDate
}
