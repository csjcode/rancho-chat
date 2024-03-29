import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import Bubble from "../../../components/Bubble";
import getColors from "../../../constants/colors/getColors";
const colorsTheme = getColors();

interface Props {
  chatData: any;
  chatId: string;
  chatMessages: any[];
  setReplyingTo: (message: any) => void;
}

const ChatFull: React.FC<Props> = ({
  chatData,
  chatId,
  chatMessages,
  setReplyingTo,
}) => {
  const storedUsers = useSelector((state: any) => state.users.storedUsers);
  const userData = useSelector((state: any) => state.auth.userData);
  const flatList = useRef<any>();

  return (
    <>
      <FlatList
        ref={(ref) => (flatList.current = ref)}
        onContentSizeChange={() =>
          flatList.current.scrollToEnd({ animated: false })
        }
        onLayout={() => flatList.current.scrollToEnd({ animated: false })}
        data={chatMessages}
        renderItem={(itemData) => {
          const message = itemData.item;

          const isOwnMessage = message.sentBy === userData.userId;

          let messageType;
          if (message.type && message.type === "info") {
            messageType = "info";
          } else if (isOwnMessage) {
            messageType = "myMessage";
          } else {
            messageType = "theirMessage";
          }

          const sender = message.sentBy && storedUsers[message.sentBy];
          const name = sender && `${sender.firstName} ${sender.lastName}`;

          return (
            <Bubble
              type={messageType}
              text={message.text}
              messageId={message.key}
              userId={userData.userId}
              chatId={chatId}
              date={message.sentAt}
              name={!chatData.isGroupChat || isOwnMessage ? undefined : name}
              setReply={() => setReplyingTo(message)}
              replyingTo={
                message.replyTo &&
                chatMessages.find((i) => i.key === message.replyTo)
              }
              imageUrl={message.imageUrl}
            />
          );
        }}
      />
    </>
  );
};

export default ChatFull;
