/**
 * 
 * 
 * 
//Test 1 - Snapshot test
it('renders correctly', () => {
  const tree = renderer
    .create(<PageContainer/>)
    .toJSON();
  expect(tree).toMatchSnapshot(); 
});

//This test verifies that the PageContainer component renders correctly by taking a snapshot of it and comparing it with the expected one.

//Test 2
it('renders with props', () => {
  const tree = renderer
    .create(<PageContainer style={{backgroundColor: 'red'}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot(); 
});

//This test verifies that the PageContainer component renders correctly when it is given props. It does this by taking a snapshot of the component, including the props, and comparing it with the expected one.

//Test 3
it('renders with children', () => {
  const tree = renderer
    .create(<PageContainer>Test</PageContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot(); 
});

//This test verifies that the PageContainer component renders correctly when it is given children. It does this by taking a snapshot of the component, including the children, and comparing it with the expected one.

//Test 4
it('renders with props and children', () => {
  const tree = renderer
    .create(<PageContainer style={{backgroundColor: 'red'}}>Test</PageContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot(); 
});

//This test verifies that the PageContainer component renders correctly when it is given props and children. It does this by taking a snapshot of the component, including the props and children, and comparing it with the expected one.
 * 
 */
