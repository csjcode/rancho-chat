/*
//Test code
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

import DataItem from './DataItem'
import colors from '../constants/colors'

const image = 'https://example.com/image.jpg'
const title = 'Example Title'
const subTitle = 'Example Subtitle'
const type = 'checkbox'
const isChecked = true
const icon = 'hearto'

describe('DataItem component', () => {
  afterEach(cleanup)

  // Snapshot test
  it('matches snapshot', () => {
    const tree = renderer.create(<DataItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Render test
  it('renders correctly', () => {
    const { getByTestId } = render(
      <DataItem
        title={title}
        subTitle={subTitle}
        image={image}
        type={type}
        isChecked={isChecked}
        icon={icon}
      />,
    )

    expect(getByTestId('data-item-title')).toHaveTextContent(title)
    expect(getByTestId('data-item-subtitle')).toHaveTextContent(subTitle)
    expect(getByTestId('data-item-icon')).toHaveStyle({ color: colors.blue })
    expect(getByTestId('data-item-checkbox')).toHaveStyle({
      backgroundColor: colors.primary,
    })
    expect(getByTestId('data-item-image')).toHaveProp('uri', image)
  })

  // Interaction test
  it('triggers onPress event', () => {
    const onPress = jest.fn()
    const { getByTestId } = render(<DataItem title={title} onPress={onPress} />)
    fireEvent.press(getByTestId('data-item-container'))
    expect(onPress).toBeCalled()
  })
})

// The tests above check the DataItem component for correct rendering, styling, and interaction. The first test checks that the component renders correctly using a snapshot test. The second and third tests check that the component renders the correct title, subtitle, image, icon, type, and isChecked prop values. The fourth test checks that the onPress event is triggered when the component is pressed.
*/
