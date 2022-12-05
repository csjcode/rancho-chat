/**
 * 
// Unit Test Code
import 'react-native';
import React from 'react';
import ChatListScreen from '../../../screens/ChatListScreen';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../store/reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../../components/CustomHeaderButton';
import DataItem from '../../../components/DataItem';
import PageContainer from '../../../components/PageContainer';
import PageTitle from '../../../components/PageTitle';
import colors from '../../../constants/colors';

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const Stack = createStackNavigator();

const navigation = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
  goBack: jest.fn(),
};

const route = {
  params: {
    selectedUserId: '1',
    selectedUsers: [],
    chatName: 'test chat',
  },
};

const auth = {
  userData: {
    userId: '1',
  },
};

const users = {
  storedUsers: {
    1: {
      firstName: 'test',
      lastName: 'test',
      profilePicture: 'test',
    },
  },
};

const chats = {
  chatsData: {
    1: {
      key: '1',
      isGroupChat: false,
      users: ['1'],
      latestMessageText: 'hello',
    },
  },
};

const initialState = {
  auth: auth,
  users: users,
  chats: chats,
};

describe('ChatListScreen Component', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer
        .create(
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="ChatListScreen"
                  component={ChatListScreen}
                  initialParams={route.params}
                  options={({ navigation }) => ({
                    headerRight: () => {
                      return (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                          <Item
                            title="New chat"
                            iconName="create-outline"
                            onPress={() =>
                              navigation.navigate('NewChat')
                            }
                          />
                        </HeaderButtons>
                      );
                    },
                  })}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>,
        )
        .getInstance()
        .getChildContext().store.getState();
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should contain PageContainer, PageTitle, FlatList, TouchableOpacity, Text and HeaderButtons', () => {
      expect(wrapper.find(PageContainer)).toBeTruthy();
      expect(wrapper.find(PageTitle)).toBeTruthy();
      expect(wrapper.find(FlatList)).toBeTruthy();
      expect(wrapper.find(TouchableOpacity)).toBeTruthy();
      expect(wrapper.find(Text)).toBeTruthy();
      expect(wrapper.find(HeaderButtons)).toBeTruthy();
    });
  });

  describe('Functionality', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer
        .create(
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="ChatListScreen"
                  component={ChatListScreen}
                  initialParams={route.params}
                  options={({ navigation }) => ({
                    headerRight: () => {
                      return (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                          <Item
                            title="New chat"
                            iconName="create-outline"
                            onPress={() =>
                              navigation.navigate('NewChat')
                            }
                          />
                        </HeaderButtons>
                      );
                    },
                  })}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>,
        )
        .getInstance()
        .getWrappedInstance();
    });

    // Test 1: Check if headerRight renders correctly
    it('should render the headerRight correctly', () => {
      const headerRight = wrapper.props.options({ navigation }).headerRight;
      expect(headerRight).toBeDefined();
    });

    // Test 2: Check if navigation to NewChat screen works
    it('should navigate to the NewChat screen', () => {
      const headerRight = wrapper.props.options({ navigation }).headerRight;
      headerRight.props.children.props.onPress();
      expect(navigation.navigate).toHaveBeenCalledWith('NewChat');
    });

    // Test 3: Check if navigation to ChatScreen with chatId works
    it('should navigate to the ChatScreen with chatId', () => {
      wrapper.props.route.params.selectedUserId = '1';
      wrapper.props.route.params.selectedUsers = [];
      wrapper.props.route.params.chatName = 'Test Chat';

      wrapper.componentDidMount();
      expect(navigation.navigate).toHaveBeenCalledWith('ChatScreen', {
        chatId: '1',
      });
    });

    // Test 4: Check if navigation to ChatScreen with newChatData works
    it('should navigate to the ChatScreen with newChatData', () => {
      wrapper.props.route.params.selectedUserId = null;
      wrapper.props.route.params.selectedUsers = ['1'];
      wrapper.props.route.params.chatName = 'Test Chat';

      wrapper.componentDidMount();
      expect(navigation.navigate).toHaveBeenCalledWith('ChatScreen', {
        newChatData: {
          users: ['1', '1'],
          isGroupChat: true,
          chatName: 'Test Chat',
        },
      });
    });

    // Test 5: Check if navigation to NewChat screen with isGroupChat works
    it('should navigate to the NewChat screen with isGroupChat', () => {
      wrapper.onNewGroupPress();
      expect(navigation.navigate).toHaveBeenCalledWith('NewChat', {
        isGroupChat: true,
      });
    });
  });
});

// Explanation of Tests:
// Test 1: Checks if the headerRight renders correctly.
// Test 2: Checks if navigation to the NewChat screen works.
// Test 3: Checks if navigation to the ChatScreen with chatId works.
// Test 4: Checks if navigation to the ChatScreen with newChatData works.
// Test 5: Checks if navigation to the NewChat screen with isGroupChat works.
 */
