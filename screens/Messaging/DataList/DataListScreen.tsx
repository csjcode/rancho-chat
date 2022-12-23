import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import { DataItemProps } from "../../../components/DataItem";
import DataItem from "../../../components/DataItem";
import PageContainer from "../../../components/PageContainer";
import getColors from "../../../constants/colors/getColors";
const colorsTheme = getColors();

interface DataListScreenProps {
  route: {
    params: {
      title: string;
      data: any[];
      type: string;
      chatId: string;
    };
  };
  navigation: any;
}

interface CurrentUserProps {
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  about?: string;
}

const DataListScreen = (props: DataListScreenProps) => {
  const storedUsers = useSelector(
    (state: RootState) => state.users.storedUsers
  );
  const userData = useSelector((state: RootState) => state.auth.userData);
  const messagesData = useSelector(
    (state: RootState) => state.messages.messagesData
  );

  const { title, data, type, chatId } = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({ headerTitle: title });
  }, [title]);

  return (
    <PageContainer>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.messageId || item}
        renderItem={(itemData: any): DataItemProps | undefined | any => {
          let key,
            onPress,
            image,
            title,
            subTitle,
            itemType: string | undefined;

          if (type === "users") {
            const uid = itemData.item;
            const currentUser: CurrentUserProps = storedUsers[uid];

            if (!currentUser) return;
            console.log(`userData ${userData}`);

            const isLoggedInUser = uid === userData?.userId;

            key = uid;
            image = currentUser.profilePicture;
            title = `${currentUser.firstName} ${currentUser.lastName}`;
            subTitle = currentUser.about;
            itemType = isLoggedInUser ? undefined : "link";
            onPress = isLoggedInUser
              ? undefined
              : () => props.navigation.navigate("Contact", { uid, chatId });
          } else if (type === "messages") {
            const starData = itemData.item;
            const { chatId, messageId } = starData;
            const messagesForChat = messagesData[chatId];

            if (!messagesForChat) {
              return;
            }

            const messageData = messagesForChat[messageId];
            const sender =
              messageData.sentBy && storedUsers[messageData.sentBy];
            const name = sender && `${sender.firstName} ${sender.lastName}`;

            key = messageId;
            title = name;
            subTitle = messageData.text;
            itemType = "";
            onPress = () => {};
          }

          return (
            <DataItem
              key={key}
              onPress={onPress}
              image={image}
              title={title}
              subTitle={subTitle}
              type={itemType}
            />
          );
        }}
      />
    </PageContainer>
  );
};

export default DataListScreen;
