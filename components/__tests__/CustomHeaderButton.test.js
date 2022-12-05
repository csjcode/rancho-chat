/* 

// Unit Tests
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomHeaderButton from '../CustomHeaderButton';

describe('CustomHeaderButton component', () => {
  it('Renders CustomHeaderButton component properly', () => {
    const { getByTestId } = render(<CustomHeaderButton />);
    const component = getByTestId('CustomHeaderButton');
    expect(component).toBeTruthy();
  });

  it('Matches the snapshot', () => {
    const { asJSON } = render(<CustomHeaderButton />);
    expect(asJSON()).toMatchSnapshot();
  });

  it('Renders an <Ionicons /> component', () => {
    const { getByTestId } = render(<CustomHeaderButton />);
    const component = getByTestId('Ionicons');
    expect(component).toBeTruthy();
  });

  it('Passes in the correct props to the <Ionicons /> component', () => {
    const { getByTestId } = render(<CustomHeaderButton color={colors.blue} />);
    const component = getByTestId('Ionicons');
    expect(component.props.iconSize).toBe(23);
    expect(component.props.color).toBe(colors.blue);
  });
});

// The tests above check to make sure that the CustomHeaderButton component renders properly, that it matches the snapshot, that it renders an Ionicons component, and that it passes in the correct props to the Ionicons component.

*/
