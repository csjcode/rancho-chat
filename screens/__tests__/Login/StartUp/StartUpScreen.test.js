/**
 * 
 * 
// Tests

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import StartUpScreen from './StartUpScreen';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate, setDidTryAutoLogin } from '../../../store/authSlice';
import { getUserData } from '../../../utils/actions/userActions';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

jest.mock('../../../utils/actions/userActions', () => ({
  getUserData: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('StartUpScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StartUpScreen />);
  });

  // Snapshot Testing
  it('should match snapshot', () => {
    const tree = renderer.create(<StartUpScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Testing useEffect
  it('should call useEffect', () => {
    const useEffect = jest.spyOn(React, 'useEffect');
    wrapper = shallow(<StartUpScreen />);
    expect(useEffect).toHaveBeenCalled();
  });

  // Testing useDispatch
  it('should call useDispatch', () => {
    expect(useDispatch).toHaveBeenCalled();
  });

  // Testing AsyncStorage
  it('should call AsyncStorage', () => {
    expect(AsyncStorage.getItem).toHaveBeenCalled();
  });

  // Testing authenticate
  it('should call authenticate', () => {
    expect(authenticate).toHaveBeenCalled();
  });

  // Testing setDidTryAutoLogin
  it('should call setDidTryAutoLogin', () => {
    expect(setDidTryAutoLogin).toHaveBeenCalled();
  });

  // Testing getUserData
  it('should call getUserData', () => {
    expect(getUserData).toHaveBeenCalled();
  });
});

/*
The tests above are testing the StartUpScreen component to ensure that it works correctly. The first test is a snapshot test which takes a "snapshot" of the rendered component and compares it to a stored version. The next five tests are unit tests which check that the various functions and methods are being called correctly. Specifically, it is testing the useEffect() hook, the useDispatch() method, AsyncStorage.getItem(), the authenticate() action, the setDidTryAutoLogin() action and the getUserData() utility function. All of these tests help to ensure that the StartUpScreen component is working correctly.

 */
