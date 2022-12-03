export const logger = (type, property, value) => {
  switch (type) {
    case 'component':
      return console.log(`${property} component rendering`)
      break
    case 'fn':
      return console.log(`${property} function rendering`)
      break
    case 'string':
      return console.log(`${property} is ${value}`)
      break
    case 'object':
      return console.log(`} is ${JSON.stringify(property)}`)
      break
    default:
      break
  }
}
