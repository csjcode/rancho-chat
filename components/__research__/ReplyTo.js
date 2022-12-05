/**
 * 
 * 
 * 
// Unit Tests

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import ReplyTo from './ReplyTo'

describe('ReplyTo', () => {
  const mockOnCancel = jest.fn()
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  }

  it('renders correctly', () => {
    const { toJSON } = render(
      <ReplyTo text="Hi" user={user} onCancel={mockOnCancel} />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders the name and text', () => {
    const { getByText } = render(
      <ReplyTo text="Hi" user={user} onCancel={mockOnCancel} />
    )
    expect(getByText('John Doe')).toBeTruthy()
    expect(getByText('Hi')).toBeTruthy()
  })

  it('calls onCancel when close icon is pressed', async () => {
    const { getByTestId } = render(
      <ReplyTo text="Hi" user={user} onCancel={mockOnCancel} />
    )
    fireEvent.press(getByTestId('close-icon'))
    await waitFor(() => expect(mockOnCancel).toHaveBeenCalled())
  })

  it('does not display the name if user is undefined', () => {
    const { queryByText } = render(<ReplyTo text="Hi" onCancel={mockOnCancel} />)
    expect(queryByText('John Doe')).toBe(null)
  })

  it('does not display the text if text is undefined', () => {
    const { queryByText } = render(
      <ReplyTo user={user} onCancel={mockOnCancel} />
    )
    expect(queryByText('Hi')).toBe(null)
  })

  it('does not display the close icon if onCancel is undefined', () => {
    const { queryByTestId } = render(
      <ReplyTo text="Hi" user={user} />
    )
    expect(queryByTestId('close-icon')).toBe(null)
  })
})

// The tests above ensure that the correct elements are rendered, the correct props are passed in, and that the correct methods are called when appropriate. The first test renders a React Native component and takes a snapshot, which is compared to subsequent snapshots. If a change is made to the rendered component that is not intended, the test will fail. The second test checks that the user's name and text are being rendered correctly. The third test checks that when the close icon is pressed, the mock onCancel function is called. The fourth and fifth tests check that the user's name and text are not rendered if the related props are undefined and that the close icon is not rendered when the onCancel prop is undefined.


 */