/**
 * 
 * 
// Test 1

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    inputValues: {},
    inputValidities: {},
    formIsValid: true
  })
});

// Test 2

it('should return a valid state for valid input', () => {
  const action = {
    validationResult: true,
    inputId: 'name',
    inputValue: 'John'
  }

  expect(reducer(undefined, action)).toEqual({
    inputValues: { name: 'John' },
    inputValidities: { name: true },
    formIsValid: true
  })
});

// Test 3

it('should return an invalid state for invalid input', () => {
  const action = {
    validationResult: false,
    inputId: 'name',
    inputValue: 'John'
  }

  expect(reducer(undefined, action)).toEqual({
    inputValues: { name: 'John' },
    inputValidities: { name: false },
    formIsValid: false
  })
});

// Test 4

it('should return a valid state for multiple valid inputs', () => {
  const action1 = {
    validationResult: true,
    inputId: 'name',
    inputValue: 'John'
  }

  const action2 = {
    validationResult: true,
    inputId: 'email',
    inputValue: 'john@example.com'
  }

  const state = reducer(undefined, action1)
  expect(reducer(state, action2)).toEqual({
    inputValues: {
      name: 'John',
      email: 'john@example.com'
    },
    inputValidities: {
      name: true,
      email: true
    },
    formIsValid: true
  })
});

// Test 5

it('should return an invalid state for multiple invalid inputs', () => {
  const action1 = {
    validationResult: false,
    inputId: 'name',
    inputValue: 'John'
  }

  const action2 = {
    validationResult: false,
    inputId: 'email',
    inputValue: 'john@example.com'
  }

  const state = reducer(undefined, action1)
  expect(reducer(state, action2)).toEqual({
    inputValues: {
      name: 'John',
      email: 'john@example.com'
    },
    inputValidities: {
      name: false,
      email: false
    },
    formIsValid: false
  })
});

// The tests above test the React Native reducer used to update the form state. Test 1 checks that the initial state is returned when the reducer is called with an empty action. Test 2 checks that a valid state is returned when the input is valid. Test 3 checks that an invalid state is returned when the input is invalid. Test 4 checks that a valid state is returned when multiple inputs are valid. Test 5 checks that an invalid state is returned when multiple inputs are invalid.

 */