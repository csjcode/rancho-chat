/**
 * 
 * 
// Unit Tests

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ActivityIndicator } from 'react-native'
import ContactScreen from '../../screens/ContactScreen'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../store/reducers'

const store = createStore(reducer)

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
    push: jest.fn(),
    goBack: jest.fn(),
  },
  route: {
    params: {
      uid: 'someUid',
      chatId: 'someChatId',
    },
  },
  ...props,
})

describe('ContactScreen', () => {
  let wrapper
  let props
  let component

  beforeEach(() => {
    props = createTestProps()
    wrapper = shallow(
      <Provider store={store}>
        <ContactScreen {...props} />
      </Provider>,
    )
    component = wrapper.find(ContactScreen)
  })

  it('should render the component', () => {
    expect(component).toHaveLength(1)
  })

  it('should render ActivityIndicator when loading', () => {
    wrapper.setState({ isLoading: true })
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('should call goBack when removeFromChat is called', () => {
    const instance = component.instance()
    instance.removeFromChat()
    expect(props.navigation.goBack).toHaveBeenCalled()
  })
})

// The tests above check if the ContactScreen component is rendered correctly and if the removeFromChat function works correctly. The first test checks if the ContactScreen component is rendered, the second if the ActivityIndicator is rendered when the loading state is true, the third if the component matches the snapshot, and the fourth if the goBack function is called when the removeFromChat function is called. The snapshot test compares the rendered component to a saved version of the component, ensuring that any changes to the component visually do not break the app.


 */
