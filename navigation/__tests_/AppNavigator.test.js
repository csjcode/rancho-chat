/**
 * 
 * 
//Test 1:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('AppNavigator', () => {
  it('renders MainNavigator if user is authenticated', () => {
    store.getState().auth.token = '12345'
    const { getByTestId } = render(
      <Provider store={store}>
        <AppNavigator />
      </Provider>,
    )
    expect(getByTestId('MainNavigator')).toBeInTheDocument()
  });
});

//This test is ensuring that the MainNavigator component is rendered when the user is authenticated. It does this by setting the auth token to '12345' and then using the react-testing-library to render the AppNavigator component and check for the presence of the MainNavigator component.

//Test 2:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('AppNavigator', () => {
  it('renders AuthScreen if user is not authenticated and didTryAutoLogin is true', () => {
    store.getState().auth.token = null
    store.getState().auth.didTryAutoLogin = true
    const { getByTestId } = render(
      <Provider store={store}>
        <AppNavigator />
      </Provider>,
    )
    expect(getByTestId('AuthScreen')).toBeInTheDocument()
  });
});

//This test is ensuring that the AuthScreen component is rendered when the user is not authenticated and didTryAutoLogin is true. It does this by setting the auth token to null and didTryAutoLogin to true, and then using the react-testing-library to render the AppNavigator component and check for the presence of the AuthScreen component.

//Test 3:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('AppNavigator', () => {
  it('renders StartUpScreen if user is not authenticated and didTryAutoLogin is false', () => {
    store.getState().auth.token = null
    store.getState().auth.didTryAutoLogin = false
    const { getByTestId } = render(
      <Provider store={store}>
        <AppNavigator />
      </Provider>,
    )
    expect(getByTestId('StartUpScreen')).toBeInTheDocument()
  });
});

//This test is ensuring that the StartUpScreen component is rendered when the user is not authenticated and didTryAutoLogin is false. It does this by setting the auth token to null and didTryAutoLogin to false, and then using the react-testing-library to render the AppNavigator component and check for the presence of the StartUpScreen component.

//Test 4:
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AppNavigator from './AppNavigator'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('AppNavigator', () => {
  it('renders the correct components when the user is authenticated', () => {
    store.getState().auth.token = '12345'
    render(
      <Provider store={store}>
        <AppNavigator />
      </Provider>,
    )
    expect(screen.getByTestId('MainNavigator')).toBeInTheDocument()
    expect(screen.queryByTestId('AuthScreen')).not.toBeInTheDocument()
    expect(screen.queryByTestId('StartUpScreen')).not.toBeInTheDocument()
  });
});

//This test is ensuring that the correct components are rendered when the user is authenticated. It does this by setting the auth token to '12345' and then using the react-testing-library to render the AppNavigator component and check for the presence of the MainNavigator component and the absence of the AuthScreen and StartUpScreen components.

//Test 5:
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('AppNavigator', () => {
  it('renders correctly with snapshot', () => {
    store.getState().auth.token = '12345'
    const { asFragment } = render(
      <Provider store={store}>
        <AppNavigator />
      </Provider>,
    )
    expect(asFragment()).toMatchSnapshot()
  });
});

//This test is ensuring that the AppNavigator renders correctly by taking a snapshot of the rendered component and comparing it against a previous snapshot. It does this by setting the auth token to '12345' and then using the react-testing-library to render the AppNavigator component and take a snapshot of the rendered component.


 */
