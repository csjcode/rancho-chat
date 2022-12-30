import renderer from "react-test-renderer";
import ReplyTo from "../ReplyTo";
import TokenPrice from "../TokenPrice";

xit("renders correctly", () => {
  // const mockProps = {
  //   text: "This is a test message",
  //   user: {
  //     firstName: "John",
  //     lastName: "Doe",
  //   },
  //   onCancel: jest.fn(),
  // };
  //  const tree = ReactTestRenderer.create(<ReplyTo {...mockProps} />).toJSON();
  const tree = renderer.create(<TokenPrice />).toJSON();
  expect(tree).toMatchSnapshot();
});
