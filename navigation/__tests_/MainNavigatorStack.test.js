/**
 * 
 * 

// Unit Tests:

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import { MainNavigatorStack } from './MainNavigatorStack';

afterEach(cleanup);

describe('MainNavigatorStack', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<MainNavigatorStack />);
    expect(getByTestId('MainNavigatorStack')).toBeTruthy();
  });

  it('renders the correct screens', () => {
    const { getByText } = render(<MainNavigatorStack />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('ChatScreen')).toBeTruthy();
    expect(getByText('ChatSettings')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
    expect(getByText('DataList')).toBeTruthy();
  });

  it('renders the correct options for screens', () => {
    const { getByText } = render(<MainNavigatorStack />);
    expect(getByText('headerShown: false')).toBeTruthy();
    expect(getByText('headerBackTitle: Back')).toBeTruthy();
    expect(getByText('headerShadowVisible: false')).toBeTruthy();
  });

  it('renders the presentation option for screens', () => {
    const { getByText } = render(<MainNavigatorStack />);
    expect(getByText('presentation: containedModal')).toBeTruthy();
  });

  it('renders the correct component names', () => {
    const { getByText } = render(<MainNavigatorStack />);
    expect(getByText('MainNavigatorTab')).toBeTruthy();
    expect(getByText('ChatScreen')).toBeTruthy();
    expect(getByText('ChatSettingsScreen')).toBeTruthy();
    expect(getByText('ContactScreen')).toBeTruthy();
    expect(getByText('DataListScreen')).toBeTruthy();
    expect(getByText('NewChatScreen')).toBeTruthy();
  });

  it('renders the correct component name for logger', () => {
    const { getByText } = render(<MainNavigatorStack />);
    expect(getByText('component', 'MainNavigatorStack')).toBeTruthy();
  });

  it('renders a snapshot of the component', () => {
    const { baseElement } = render(<MainNavigatorStack />);
    expect(baseElement).toMatchSnapshot();
  });
});

The tests above check that the MainNavigatorStack component renders without crashing, that it renders the correct screens and options for the screens, that it renders the correct components for each screen, that it renders the correct component name for the logger, and that it renders a snapshot of the component.


 */
