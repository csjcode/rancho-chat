/**
 * 
//Test code
import { authenticate, setDidTryAutoLogin, logout, updateLoggedInUserData } from './authSlice';

describe('authSlice', () => {
    const initialState = {
        token: null,
        userData: null,
        didTryAutoLogin: false
    }
    it('authenticate should update token and userData in the state', () => {
        const newState = {
            token: 'token',
            userData: { name: 'John' },
            didTryAutoLogin: true
        }
        const action = authenticate({token: 'token', userData: {name: 'John'}});
        expect(authSlice(initialState, action)).toEqual(newState);
    });
    it('setDidTryAutoLogin should update didTryAutoLogin in the state', () => {
        const newState = {
            token: null,
            userData: null,
            didTryAutoLogin: true
        }
        const action = setDidTryAutoLogin();
        expect(authSlice(initialState, action)).toEqual(newState);
    });
    it('logout should reset token, userData and tryAutoLogin in the state', () => {
        const state = {
            token: 'token',
            userData: { name: 'John' },
            didTryAutoLogin: true
        }
        const action = logout();
        expect(authSlice(state, action)).toEqual(initialState);
    });
    it('updateLoggedInUserData should update userData in the state', () => {
        const state = {
            token: 'token',
            userData: { name: 'John', age: 20 },
            didTryAutoLogin: true
        }
        const newState = {
            token: 'token',
            userData: { name: 'John', age: 20, city: 'New York' },
            didTryAutoLogin: true
        }
        const action = updateLoggedInUserData({newData: {city: 'New York'}});
        expect(authSlice(state, action)).toEqual(newState);
    });
});

//The above tests check that the authSlice reducer is functioning as expected. The first test checks that the authenticate action correctly updates the token and userData in the state, the second test checks that the setDidTryAutoLogin action correctly updates the didTryAutoLogin in the state, the third test checks that the logout action correctly resets the token, userData and didTryAutoLogin in the state, and the fourth test checks that the updateLoggedInUserData action correctly updates the userData in the state.
 */
