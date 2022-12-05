/**
 * 
 * 
 * 
// Test 1: validateString
it('validateString should return true', () => {
  const inputId = 'firstName'
  const inputValue = 'John'
  expect(validateString(inputId, inputValue)).toBe(true)
})

// Test 2: validateEmail
it('validateEmail should return true with a valid email address', () => {
  const inputId = 'email'
  const inputValue = 'john@example.com'
  expect(validateEmail(inputId, inputValue)).toBe(true)
})

// Test 3: validatePassword
it('validatePassword should return true with an 8-10 character password with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character', () => {
  const inputId = 'password'
  const inputValue = 'P@ssw0rd'
  expect(validatePassword(inputId, inputValue)).toBe(true)
})

// Test 4: validateLength
it('validateLength should return true when the length is between min and max', () => {
  const inputId = 'about'
  const inputValue = 'This is a valid string.'
  const min = 0
  const max = 150
  const optional = true
  expect(validateLength(inputId, inputValue, min, max, optional)).toBe(true)
})

// Test 5: validateInput
it('validateInput should return true when the input is valid', () => {
  const inputId = 'tricks'
  const inputValue = 'Some tricks!'
  expect(validateInput(inputId, inputValue)).toBe(true)
})

// Snapshot Test
it('validateInput should match the snapshot', () => {
  const inputId = 'tricks'
  const inputValue = 'Some tricks!'
  expect(validateInput(inputId, inputValue)).toMatchSnapshot()
})

// Explanation
// The first five tests test the individual validation functions to ensure they return true when given valid input. The final test is a snapshot test to ensure that the validateInput function returns the expected output.


 */
