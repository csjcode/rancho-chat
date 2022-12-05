/**
 * 
//Test code
import { messagesSlice, setChatMessages, addStarredMessage, removeStarredMessage, setStarredMessages } from "./messagesSlice";

describe("messagesSlice", () => {
  it("should handle setChatMessages action", () => {
    const chatId = "1";
    const messagesData = {
      message1: {
        text: "message 1",
      },
      message2: {
        text: "message 2",
      },
    };

    const expectedState = {
      messagesData: {
        [chatId]: messagesData,
      },
      starredMessages: {},
    };

    const result = messagesSlice(
      {
        messagesData: {},
        starredMessages: {},
      },
      setChatMessages({
        chatId,
        messagesData,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it("should handle addStarredMessage action", () => {
    const messageId = "1"
    const starredMessageData = {
      messageId,
      text: "message 1"
    }

    const expectedState = {
      messagesData: {},
      starredMessages: {
        [messageId]: starredMessageData
      }
    }

    const result = messagesSlice(
      {
        messagesData: {},
        starredMessages: {}
      },
      addStarredMessage({
        starredMessageData
      })
    )

    expect(result).toEqual(expectedState)
  })

  it("should handle removeStarredMessage action", () => {
    const messageId = "1";
    const expectedState = {
      messagesData: {},
      starredMessages: {},
    };

    const result = messagesSlice(
      {
        messagesData: {},
        starredMessages: { [messageId]: { text: "message 1" } },
      },
      removeStarredMessage({
        messageId,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it("should handle setStarredMessages action", () => {
    const starredMessages = {
      message1: {
        text: "message 1",
      },
      message2: {
        text: "message 2",
      },
    };

    const expectedState = {
      messagesData: {},
      starredMessages,
    };

    const result = messagesSlice(
      {
        messagesData: {},
        starredMessages: {},
      },
      setStarredMessages({
        starredMessages,
      })
    );

    expect(result).toEqual(expectedState);
  });
});

//The tests above check to see if the reducer is correctly handling the setChatMessages, addStarredMessage, removeStarredMessage, and setStarredMessages actions. It creates a new state object, then calls the appropriate action with the appropriate payload. Finally, it checks to see if the expected state matches the actual state.
 */
