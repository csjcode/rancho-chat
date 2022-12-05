/**
 * 
 * 
 * 
//Unit Test Code
import 'react-native';
import React from 'react';
import SubmitButton from './SubmitButton';

import renderer from 'react-test-renderer';

describe('SubmitButton component', () => {

  it('renders correctly', () => {
    const tree = renderer
    .create(<SubmitButton title='Submit' />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with given props', () => {
    const tree = renderer
    .create(<SubmitButton title='Submit' disabled={true} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with given color', () => {
    const tree = renderer
    .create(<SubmitButton title='Submit' color='red' />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with given style', () => {
    const tree = renderer
    .create(<SubmitButton title='Submit' style={{margin: 10}} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls the onPress function', () => {
    const onPressMock = jest.fn();
    const tree = renderer
    .create(<SubmitButton title='Submit' onPress={onPressMock} />)
    .toJSON();
    expect(onPressMock).toHaveBeenCalledTimes(0);
    tree.props.onPress();
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

});

//These tests check that the SubmitButton component renders correctly with the given props, such as title, disabled, color and style. It also checks that when the onPress function is called, it is indeed called. In addition, the tests also check that the component renders correctly with snapshots.


 */
