/**
 * 
 * 
 * 
// Tests
// 1. Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<ProfileImage />).toJSON()
  expect(tree).toMatchSnapshot()
})

// 2. Test that renders with no errors
it('renders without error', () => {
  shallow(<ProfileImage />)
})

// 3. Test for the onPress functionality
it('calls pickImage when pressed', () => {
  const spy = jest.fn()
  const wrapper = shallow(<ProfileImage onPress={spy} />)
  wrapper.find(TouchableOpacity).simulate('press')
  expect(spy).toBeCalled()
})

// 4. Test that the correct image is rendered
it('renders the correct image', () => {
  const wrapper = shallow(<ProfileImage uri={'some_uri'} />)
  expect(wrapper.find('Image').prop('source')).toEqual({ uri: 'some_uri' })
})

// These tests check for basic functionality of the ProfileImage component. The first test checks that the component renders correctly. The second test checks that the component renders with no errors. The third test checks that the onPress function is called when the component is pressed. The fourth test checks that the correct image is rendered.
 * 
 * 
 */
