import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import DataItem from "../../components/DataItem";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import ProfileImage from "../../components/ProfileImage";
import SubmitButton from "../../components/SubmitButton";
import { removeUserFromChat } from "../../utils/actions/chatActions";
import { getUserChats } from "../../utils/actions/userActions";
import getColors from "../../constants/colors/getColors";
import { RootState } from "../../store/store";

interface ContactScreenProps {
  route: {
    params: {
      uid: string;
      chatId: string;
    };
  };
  navigation: any;
}

interface CurrentUser {
  about: string;
  email: string;
  firstLast: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  signUpDate: string;
  userId: string;
}

const ContactScreen = (props: ContactScreenProps) => {
  let colorsTheme = getColors();
  const [isLoading, setIsLoading] = useState(false);
  const storedUsers = useSelector(
    (state: RootState) => state.users.storedUsers
  );
  const userData = useSelector((state: RootState) => state.auth.userData);
  const currentUser: CurrentUser | any = storedUsers[props.route.params.uid];

  const storedChats: { [key: string]: any } = useSelector<
    RootState,
    { [key: string]: any }
  >((state: RootState) => state.chats.chatsData);
  const [commonChats, setCommonChats] = useState<string[]>([]);

  const chatId = props.route.params.chatId;
  const chatData = chatId && storedChats[chatId];

  useEffect(() => {
    const getCommonUserChats = async () => {
      const currentUserChats: { [key: string]: string } = await getUserChats(
        currentUser.userId
      );
      setCommonChats(
        Object.values(currentUserChats).filter(
          (cid) => storedChats[cid] && storedChats[cid].isGroupChat
        )
      );
    };

    getCommonUserChats();
  }, []);

  const removeFromChat = useCallback(async () => {
    try {
      setIsLoading(true);

      await removeUserFromChat(userData, currentUser, chatData);

      props.navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [props.navigation, isLoading]);

  return (
    <PageContainer>
      <View style={stylesFor(colorsTheme).topContainer}>
        <ProfileImage
          uri={currentUser.profilePicture}
          size={80}
          style={{ marginBottom: 20 }}
        />

        <PageTitle text={`${currentUser.firstName} ${currentUser.lastName}`} />
        {currentUser.about && (
          <Text style={stylesFor(colorsTheme).about} numberOfLines={2}>
            {currentUser.about}
          </Text>
        )}
      </View>

      {commonChats.length > 0 && (
        <>
          <Text style={stylesFor(colorsTheme).heading}>
            {commonChats.length} {commonChats.length === 1 ? "Group" : "Groups"}{" "}
            in Common
          </Text>
          {commonChats.map((cid) => {
            const chatData = storedChats[cid];
            return (
              <DataItem
                key={cid}
                title={chatData.chatName}
                subTitle={chatData.latestMessageText}
                type="link"
                onPress={() =>
                  props.navigation.push("ChatScreen", { chatId: cid })
                }
                image={chatData.chatImage}
              />
            );
          })}
        </>
      )}

      {chatData &&
        chatData.isGroupChat &&
        (isLoading ? (
          <ActivityIndicator size="small" color={colorsTheme.primary} />
        ) : (
          <SubmitButton
            title="Remove from chat"
            color={colorsTheme.red}
            onPress={removeFromChat}
          />
        ))}
    </PageContainer>
  );
};

const stylesFor = (colorsTheme: any) =>
  StyleSheet.create({
    topContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 20,
    },
    about: {
      fontFamily: "medium",
      fontSize: 16,
      letterSpacing: 0.3,
      color: colorsTheme.grey,
    },
    heading: {
      fontFamily: "bold",
      letterSpacing: 0.3,
      color: colorsTheme.textColor,
      marginVertical: 8,
    },
  });

export default ContactScreen;
