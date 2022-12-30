import ReactTestRenderer from "react-test-renderer";
import ReplyTo from "../ReplyTo";
import { persistor, store } from "../../store/store";
import { Provider } from "react-redux";

it("renders correctly", () => {
  const mockProps = {
    text: "This is a test message",
    user: {
      firstName: "John",
      lastName: "Doe",
    },
    onCancel: jest.fn(),
  };
  const tree = ReactTestRenderer.create(
    <Provider store={store}>
      <ReplyTo {...mockProps} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
