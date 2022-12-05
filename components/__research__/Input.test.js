/*


// Test 1:
// This test checks that the TextInput component is rendered correctly with the supplied props
it('renders the TextInput component correctly', () => {
  const props = {
    label: 'Test Label',
    icon: 'user',
    iconPack: FontAwesome,
    iconSize: 20,
    initialValue: '',
    onInputChanged: jest.fn()
  };
  const component = renderer.create(<Input {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});

// Test 2:
// This test checks that the onChangeText function is called when the text input value changes
it('calls the onChangeText function when the text input value changes', () => {
  const props = {
    label: 'Test Label',
    icon: 'user',
    iconPack: FontAwesome,
    iconSize: 20,
    initialValue: '',
    onInputChanged: jest.fn()
  };
  const component = renderer.create(<Input {...props} />);
  component.root.findByType(TextInput).props.onChangeText('test');
  expect(props.onInputChanged).toHaveBeenCalled();
});

// Test 3:
// This test checks that the 'errorText' prop is rendered correctly 
it('renders the errorText correctly when the prop is true', () => {
  const props = {
    label: 'Test Label',
    icon: 'user',
    iconPack: FontAwesome,
    iconSize: 20,
    initialValue: '',
    onInputChanged: jest.fn(),
    errorText: ['Error Text']
  };
  const component = renderer.create(<Input {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});

// Test 4:
// This test checks that the 'value' prop is correctly passed to the TextInput component
it('passes the value prop correctly to the TextInput component', () => {
  const props = {
    label: 'Test Label',
    icon: 'user',
    iconPack: FontAwesome,
    iconSize: 20,
    initialValue: 'test',
    onInputChanged: jest.fn(),
  };
  const component = renderer.create(<Input {...props} />);
  expect(component.root.findByType(TextInput).props.value).toBe('test');
});

// The four tests above will test the following:
// Test 1: Checks that the TextInput component is rendered correctly with the supplied props
// Test 2: Checks that the onChangeText function is called when the text input value changes
// Test 3: Checks that the 'errorText' prop is rendered correctly 
// Test 4: Checks that the 'value' prop is correctly passed to the TextInput component

*/
