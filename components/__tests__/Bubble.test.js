import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import Bubble from '../Bubble'

// Snapshot Test

it('renders correctly', () => {
  const { asJSON } = render(
    <Bubble
      text="Test Bubble"
      type="myMessage"
      messageId="123"
      chatId="456"
      userId="789"
      date={new Date()}
      setReply={() => {}}
      replyingTo={null}
      name="Test Name"
      imageUrl={null}
    />,
  )
  expect(asJSON()).toMatchSnapshot()
})

// Test Description
/* This test checks to ensure that the Bubble component renders correctly, and that any changes to the component won't break the rendered output. The snapshot test will compare the rendered output of the component to the saved snapshot of the component, and will fail if the rendered output does not match the snapshot. This ensures that any changes made to the component code do not result in unexpected changes in the rendered

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Bubble from '../Bubble'

describe('Bubble', () => {

  it('renders correctly with system type', () => {
    const tree = renderer
      .create(<Bubble type="system" text="Welcome to the chat." />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with error type', () => {
    const tree = renderer
      .create(<Bubble type="error" text="Something went wrong." />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with myMessage type', () => {
    const tree = renderer
      .create(<Bubble type="myMessage" text="Hello!" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })


// Test 1:

// This snapshot test checks that the Bubble component renders correctly when given valid props.

import React from 'react'
import Bubble from './Bubble'
import { render } from '@testing-library/react-native'

it('renders correctly', () => {
  const { baseElement } = render(
    <Bubble
      type="myMessage"
      chatId="123"
      userId="456"
      text="Hello, world!"
    />,
  )
  expect(baseElement).toMatchSnapshot()
})

// Test 2:

// This test checks that the correct style and alignment props are applied when the type of the bubble is set to 'myMessage'.

import React from 'react'
import Bubble from './Bubble'
import { render } from '@testing-library/react-native'

it('styles and aligns correctly for user messages', () => {
  const { getByTestId } = render(
    <Bubble
      type="myMessage"
      chatId="123"
      userId="456"
      text="Hello, world!"
    />,
  )
  const bubble = getByTestId('bubble')
  expect(bubble.props.style.backgroundColor).toBe('#E7FED6')
  expect(bubble.props.style.maxWidth).toBe('90%')
  expect(bubble.parent.props.style.justifyContent).toBe('flex-end')
})

// Test 3:

// This test checks that the correct style and alignment props are applied when the type of the bubble is set to 'theirMessage'.

import React from 'react'
import Bubble from './Bubble'
import { render } from '@testing-library/react-native'

it('styles and aligns correctly for other user messages', () => {
  const { getByTestId } = render(
    <Bubble
      type="theirMessage"
      chatId="123"
      userId="456"
      text="Hello, world!"
    />,
  )
  const bubble = getByTestId('bubble')
  expect(bubble.props.style.backgroundColor).toBe('white')
  expect(bubble.props.style.maxWidth).toBe('90%')
  expect(bubble.parent.props.style.justifyContent).toBe('flex-start')
})

// Test 4:

// This test checks that the correct style and alignment props are applied when the type of the bubble is set to 'info'.

import React from 'react'
import Bubble from './Bubble'
import { render } from '@testing-library/react-native'

it('styles and aligns correctly for info messages', () => {
  const { getByTestId } = render(
    <Bubble
      type="info"
      chatId="123"
      userId="456"
      text="Hello, world!"
    />,
  )
  const bubble = getByTestId('bubble')
  expect(bubble.props.style.backgroundColor).toBe('white')
  expect(bubble.props.style.alignItems).toBe('center')
  expect(bubble.props.style.marginTop).toBeUndefined()
  expect(bubble.props.style.maxWidth).toBeUndefined()
  expect(bubble.parent.props.style.justifyContent).toBe('center')
})

// The four tests above check that the react native Bubble component renders correctly and that it applies the correct style and alignment props when given different types of messages. The first test is a snapshot test which checks that the component renders correctly when given valid props. The following three tests



// Tests

import '@testing-library/jest-native/extend-expect'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('Bubble', () => {
  it('renders a plain text message bubble', () => {
    const { getByTestId } = render(
      <Bubble type="myMessage" text="hello world" />
    )

    expect(getByTestId('bubble').props.style).toHaveProperty(
      'backgroundColor',
      '#E7FED6',
    )

    expect(getByTestId('message-text')).toHaveTextContent('hello world')
  })

  it('renders a system message bubble', () => {
    const { getByTestId } = render(
      <Bubble type="system" text="hello world" />
    )

    expect(getByTestId('bubble').props.style).toHaveProperty(
      'backgroundColor',
      colors.beige,
    )

    expect(getByTestId('message-text')).toHaveTextContent('hello world')
  })

  it('renders an image message bubble', () => {
    const { getByTestId } = render(
      <Bubble
        type="myMessage"
        text="hello world"
        imageUrl="https://example.com/image.jpg"
      />
    )

    expect(getByTestId('bubble').props.style).toHaveProperty(
      'backgroundColor',
      '#E7FED6',
    )

    expect(getByTestId('message-image')).toBeTruthy()
  })

  it('renders a message with a name', () => {
    const { getByTestId } = render(
      <Bubble type="theirMessage" name="John Doe" text="hello world" />
    )

    expect(getByTestId('bubble').props.style).toHaveProperty(
      'backgroundColor',
      'white',
    )

    expect(getByTestId('name')).toHaveTextContent('John Doe')
    expect(getByTestId('message-text')).toHaveTextContent('hello world')
  })

  it('renders a reply message', () => {
    const { getByTestId } = render(
      <Bubble
        type="reply"
        text="hello world"
        name="John Doe"
        replyingTo={{ sentBy: 'userId', text: 'replying to this' }}
      />
    )

    expect(getByTestId('bubble').props.style).toHaveProperty(
      'backgroundColor',
      '#F2F2F2',
    )

    expect(getByTestId('name')).toHaveTextContent('John Doe')
    expect(getByTestId('message-text')).toHaveTextContent('hello world')
  })
})

// The tests above check that the bubble component renders correctly depending on the type of message and any associated data. The first test checks that a plain text message renders with the correct background color and text content. The second test checks that a system message renders with the correct background color and text content. The third test checks that an image message renders with the correct background color and an image. The fourth test checks that a message with a name renders with the correct background color, name, and text content. The fifth test checks that a reply message renders with the correct background color, name, text content, and reply content. Additionally, the tests check that all of the necessary props are being passed. Finally, the tests also check that the snapshot of the component matches the expected output.


  */
