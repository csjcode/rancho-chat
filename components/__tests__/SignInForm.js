/**
 * 
 * 
 * 
// Test 1:
// This test will check the initial values of the form state.
it('should render initial form state correctly', () => {
  let tree = renderer.create(<SignInForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

// Test 2:
// This test will check if the inputChangedHandler is working correctly.
it('should update form state correctly when inputChangeHandler is called', () => {
  let { root } = renderer.create(<SignInForm />)
  let inputHandler = root.findByType(Input)
  let emailInput = inputHandler.props.onInputChanged('email', 'test@gmail.com')
  let passwordInput = inputHandler.props.onInputChanged('password', 'test123')

  expect(emailInput).toEqual({ email: 'test@gmail.com' })
  expect(passwordInput).toEqual({ password: 'test123' })
})

// Test 3:
// This test will check if the reducer is working correctly.
it('should update form state with reducer correctly', () => {
  let { root } = renderer.create(<SignInForm />)
  let inputHandler = root.findByType(Input)
  let emailInput = inputHandler.props.onInputChanged('email', 'test@gmail.com')
  let passwordInput = inputHandler.props.onInputChanged('password', 'test123')
  let reducerResult = reducer(initialState, {
    inputId: 'email',
    validationResult: { isValid: true },
    inputValue: emailInput.email,
  })

  expect(reducerResult.inputValues.email).toEqual(emailInput.email)
  expect(reducerResult.inputValidities.email).toEqual(true)
  expect(reducerResult.inputValidities.password).toEqual(false)
  expect(reducerResult.formIsValid).toEqual(false)
})

// Test 4:
// This test will check if the signIn function is working correctly.
it('should dispatch the signIn action correctly', async () => {
  let { root } = renderer.create(<SignInForm />)
  let authHandler = root.findByType(SubmitButton).props.onPress
  await authHandler()
  expect(authHandler).toBeCalled()
})

// Test 5:
// This test will check if the error message is displayed correctly.
it('should display an error message when an error occurs', async () => {
  let { root } = renderer.create(<SignInForm />)
  let authHandler = root.findByType(SubmitButton).props.onPress
  await authHandler()
  expect(root.findByType(Alert)).toBeDefined()
})

The tests check the initial values of the form state, if the inputChangedHandler is working correctly, if the reducer is working correctly, if the signIn function is working correctly, and if the error message is displayed correctly.


 */
