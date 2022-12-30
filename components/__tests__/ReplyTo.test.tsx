import ReactTestRenderer from "react-test-renderer";
import ReplyTo from "../ReplyTo";

it("renders correctly", () => {
  const mockProps = {
    text: "This is a test message",
    user: {
      firstName: "John",
      lastName: "Doe",
    },
    onCancel: jest.fn(),
  };
  const tree = ReactTestRenderer.create(<ReplyTo {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
