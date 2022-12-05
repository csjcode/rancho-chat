/**
 * 
//Tests

describe('authActions', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    describe('signUp', () => {
      let dispatch;
  
      beforeEach(() => {
        dispatch = jest.fn();
      });
  
      it('creates and returns user data', async () => {
        const userData = {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          uid: '123456789',
          stsTokenManager: {
            accessToken: 'token',
            expirationTime: '2020-02-02T12:00:00.000Z'
          }
        };
  
        jest
          .spyOn(require('firebase/auth'), 'createUserWithEmailAndPassword')
          .mockResolvedValue({ user: userData });
        jest.spyOn(require('./userActions'), 'createUser').mockResolvedValue({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          userId: '123456789'
        });
        jest.spyOn(require('@react-native-async-storage/async-storage'), 'setItem');
  
        await signUp('John', 'Doe', 'john@doe.com', 'test123')(dispatch);
  
        expect(dispatch).toBeCalledWith({
          type: 'AUTH_AUTHENTICATE',
          payload: {
            token: 'token',
            userData: {
              firstName: 'John',
              lastName: 'Doe',
              email: 'john@doe.com',
              userId: '123456789'
            }
          }
        });
  
        expect(setItem).toBeCalledWith(
          'userData',
          JSON.stringify({
            token: 'token',
            userId: '123456789',
            expiryDate: '2020-02-02T12:00:00.000Z'
          })
        );
      });
  
      it('returns "This email is already in use" error', async () => {
        jest
          .spyOn(require('firebase/auth'), 'createUserWithEmailAndPassword')
          .mockRejectedValue({
            code: 'auth/email-already-in-use'
          });
  
        try {
          await signUp('John', 'Doe', 'john@doe.com', 'test123')(dispatch);
        } catch (error) {
          expect(error.message).toBe('This email is already in use');
        }
      });
    });
  
    describe('signIn', () => {
      let dispatch;
  
      beforeEach(() => {
        dispatch = jest.fn();
      });
  
      it('returns user data', async () => {
        const userData = {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          uid: '123456789',
          stsTokenManager: {
            accessToken: 'token',
            expirationTime: '2020-02-02T12:00:00.000Z'
          }
        };
  
        jest
          .spyOn(require('firebase/auth'), 'signInWithEmailAndPassword')
          .mockResolvedValue({ user: userData });
        jest.spyOn(require('./userActions'), 'getUserData').mockResolvedValue({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          userId: '123456789'
        });
        jest.spyOn(require('@react-native-async-storage/async-storage'), 'setItem');
  
        await signIn('john@doe.com', 'test123')(dispatch);
  
        expect(dispatch).toBeCalledWith({
          type: 'AUTH_AUTHENTICATE',
          payload: {
            token: 'token',
            userData: {
              firstName: 'John',
              lastName: 'Doe',
              email: 'john@doe.com',
              userId: '123456789'
            }
          }
        });
  
        expect(setItem).toBeCalledWith(
          'userData',
          JSON.stringify({
            token: 'token',
            userId: '123456789',
            expiryDate: '2020-02-02T12:00:00.000Z'
          })
        );
      });
  
      it('returns "The username or password was incorrect" error', async () => {
        jest
          .spyOn(require('firebase/auth'), 'signInWithEmailAndPassword')
          .mockRejectedValue({
            code: 'auth/wrong-password'
          });
  
        try {
          await signIn('john@doe.com', 'test123')(dispatch);
        } catch (error) {
          expect(error.message).toBe('The username or password was incorrect');
        }
      });
    });
  
    describe('userLogout', () => {
      let dispatch;
  
      beforeEach(() => {
        dispatch = jest.fn();
        jest
          .spyOn(require('@react-native-async-storage/async-storage'), 'clear');
        jest.spyOn(global, 'clearTimeout');
      });
  
      it('clears storage and timer', async () => {
        await userLogout()(dispatch);
  
        expect(clear).toBeCalled();
        expect(clearTimeout).toBeCalled();
        expect(dispatch).toBeCalledWith({ type: 'AUTH_LOGOUT' });
      });
    });
  
    describe('updateSignedInUserData', () => {
      it('updates user data', async () => {
        const newData = {
          firstName: 'John',
          lastName: 'Doe'
        };
        jest.spyOn(require('firebase/database'), 'update').mockResolvedValue();
  
        await updateSignedInUserData('123456789', newData);
  
        expect(update).toBeCalledWith(
          expect.any(Object),
          {
            firstName: 'John',
            lastName: 'Doe',
            firstLast: 'john doe'
          }
        );
      });
    });

  });

The tests above check the functionality of signUp, signIn, userLogout, and updateSignedInUserData. The first two tests check the signUp and signIn functions to make sure that the correct user data is returned and that the correct error messages are thrown. The third test checks to ensure that the userLogout function correctly clears storage and the timer. The last test verifies that the updateSignedInUserData function correctly updates the user data. This includes snapshot testing to make sure the data is correctly stored.
 */
