import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import ReactTestRenderer from "react-test-renderer";
import { store } from "../../store/store";
import Bubble from "../Bubble";
import * as Clipboard from "expo-clipboard";

jest.mock("expo-clipboard", () => ({
  setStringAsync: jest.fn(),
}));

describe("Bubble snapshot is ok.", () => {
  xit("Bubble snapshot test", async () => {
    const tree = ReactTestRenderer.create(
      <Provider store={store}>
        <MenuProvider>
          <Bubble
            text="Hello, world!"
            type=""
            messageId="123"
            chatId="456"
            userId="789"
            date={new Date()}
            setReply={() => {}}
            replyingTo={{ sentBy: "abc", messageId: "def" }}
            name="John Doe"
            imageUrl="https://example.com/image.png"
          />
        </MenuProvider>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
