export default function shorten(text: string, maxLength = 300) {
  if (text && typeof text === 'string') {
    const finalChar = text.length > maxLength ? '...' : ''
    return text.substr(0, maxLength) + finalChar
  }

  return ''
}
