/**
 * 
// Tests

import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import SignUpForm from './SignUpForm';

const mockStore = configureStore([]);

const store = mockStore({});

describe('SignUpForm', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>,
    );
  });
  
  afterEach(cleanup);

  // Snapshot test
  it('matches snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Input field test
  it('should render input fields', () => {
    expect(wrapper.getByTestId('firstName')).toBeTruthy();
    expect(wrapper.getByTestId('lastName')).toBeTruthy();
    expect(wrapper.getByTestId('email')).toBeTruthy();
    expect(wrapper.getByTestId('password')).toBeTruthy();
  });

  // Submit button test
  it('should render submit button', () => {
    expect(wrapper.getByTestId('submitButton')).toBeTruthy();
  });

  // Loading indicator test
  it('should render loading indicator when isLoading is true', () => {
    expect(wrapper.queryByTestId('activityIndicator')).toBeFalsy();

    wrapper.rerender(
      <Provider store={store}>
        <SignUpForm isLoading={true} />
      </Provider>,
    );

    expect(wrapper.getByTestId('activityIndicator')).toBeTruthy();
  });

  // Error alert test
  it('should render error alert when error is present', () => {
    expect(wrapper.queryByTestId('alert')).toBeFalsy();

    wrapper.rerender(
      <Provider store={store}>
        <SignUpForm error={'Some error'} />
      </Provider>,
    );

    expect(wrapper.getByTestId('alert')).toBeTruthy();
  });
});

// The tests above check that the correct components, such as input fields and the submit button, are rendered when the SignUpForm component is rendered. It also checks that the loading indicator is rendered when isLoading is set to true, and that the error alert is rendered when an error is present. Finally, a snapshot test is included to check the overall structure of the component.
 */
